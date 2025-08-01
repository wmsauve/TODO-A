import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Stdscrollview } from '../components/stdscrollview/stdscrollview';
import { Additemform } from "../components/additemform/additemform";
import { Listitemservice } from '../services/listitemservice';
import { catchError, Subscription } from 'rxjs';
import { DictionaryEntry, GetAllResponse, GlobalEmitType, ListItem, ListItemDictionary } from '../../model/defs.type';
import { Tooltip } from "../components/tooltip/tooltip";
import { Emithandlerservice } from '../services/emithandlerservice';

@Component({
  selector: 'app-home',
  imports: [Stdscrollview, Additemform, Tooltip],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit, OnDestroy {
  serverHandlerService = inject(Listitemservice);
  globalEmitter = inject(Emithandlerservice);
  globalSubscription: Subscription = new Subscription();

  listItemDictionary = signal<GetAllResponse>({
    AllItems: {},
    Message: ""
  });

  currentSelectedItem = signal<ListItem>({
    Label: "",
    Description: "",
    DueDate: "",
    IsCompleted: false,
  });

  ngOnInit(): void {
    this.globalSubscription = this.globalEmitter.data$.subscribe(payload => {
      //Got no type safety on payload data. LOL. Can think about fixing later.
      switch(payload.type){
        case GlobalEmitType.AddItem:
          this.onAddItemPressed(payload.data);
          break;
        case GlobalEmitType.ViewInfo:
          this.onInfoRequested(payload.data);
          break;
        case GlobalEmitType.Delete:
          this.onDeleteRequested(payload.data);
          break;
        case GlobalEmitType.SaveChanges:
          this.onSaveItemChanges(payload.data);
          break;
        case GlobalEmitType.ToggleCompleted:
          this.onMakeTempClientsideChangesToData(payload.data);
          break;
        default:
          console.warn(`Attempted not yet implemented Emit type: ${payload.type}`);
          break;
      }
    });

    this.serverHandlerService.getAllListItems()
    .pipe(
      catchError((e) => {
        console.log(e);
        throw e;
      })
    )
    .subscribe((listitems) => {
      this.listItemDictionary.set(listitems);
      console.log(this.listItemDictionary());
    });
  }

  ngOnDestroy(): void {
    this.globalSubscription.unsubscribe();
  }

  onAddItemPressed(item: ListItem) {
    this.serverHandlerService.postNewItem(item)
    .pipe(
      catchError((e) => {
        console.log(e);
        throw e;
      })
    )
    .subscribe((response) => {
      this.listItemDictionary.update((val : GetAllResponse): GetAllResponse => {
        //Gross. At least it works so not worth the time to fix right now.
        let newAllItems = {
          ...this.listItemDictionary().AllItems,
          [response.Key]: item
        };
        let newGetAll : GetAllResponse = {
          AllItems: newAllItems,
          Message: "New Item Added. Don't hate me for this code please."
        };
        return newGetAll;
      });
    });
  }

  onInfoRequested(item: ListItem) {
    this.currentSelectedItem.set(item);
  }

  onDeleteRequested(key: string) {
    this.serverHandlerService.deleteThisItem(key)
    .pipe(
      catchError((e) => {
        console.log(e);
        throw e;
      })
    )
    .subscribe((response) => {
      this.listItemDictionary.set(response);
    });
  }

  onMakeTempClientsideChangesToData(item: DictionaryEntry) {
    let updatedEntries: ListItemDictionary = {
      ...this.listItemDictionary().AllItems,
      [item.key]: item.item
    };

    this.listItemDictionary.set({
      ...this.listItemDictionary(),
      AllItems: updatedEntries
    });

    this.currentSelectedItem.set(item.item);
  }

  onSaveItemChanges(dictEntry: DictionaryEntry) {
    this.serverHandlerService.saveChangesToItem(dictEntry.key, dictEntry.item)
    .pipe(
      catchError((e) => {
        console.log(e);
        throw e;
      })
    )
    .subscribe((response) => {
      console.log(response);
    });
  }
}
