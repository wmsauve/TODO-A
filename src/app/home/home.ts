import { Component, inject, OnInit, signal } from '@angular/core';
import { Stdscrollview } from '../components/stdscrollview/stdscrollview';
import { Additemform } from "../components/additemform/additemform";
import { Listitemservice } from '../services/listitemservice';
import { catchError } from 'rxjs';
import { GetAllResponse, ListItem } from '../../model/defs.type';

@Component({
  selector: 'app-home',
  imports: [Stdscrollview, Additemform],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  initService = inject(Listitemservice);

  listItemDictionary = signal<GetAllResponse>({
    AllItems: {},
    Message: ""
  });

  ngOnInit(): void {
    this.initService.getAllListItems()
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

  onAddItemPressed(item: ListItem){
    this.initService.postNewItem(item)
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
}
