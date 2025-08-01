import { Component, inject, input, OnInit } from '@angular/core';
import { DictionaryEntry, GlobalEmitType, ListItem } from '../../../model/defs.type';
import { Stdbutton } from "../stdbutton/stdbutton";
import { Emithandlerservice } from '../../services/emithandlerservice';
import { Itemlistmodified } from '../../directives/itemlistmodified';

@Component({
  selector: 'app-itemcomp',
  imports: [Stdbutton, Itemlistmodified],
  templateUrl: './itemcomp.html',
  styleUrl: './itemcomp.scss'
})
export class Itemcomp implements OnInit {
  globalEmitter = inject(Emithandlerservice);

  data = input.required<ListItem>();
  key = input.required<string>();

  attemptedToggle: boolean = false;
  originalCompleteStatus: boolean = false;
  currentCompleteStatus: boolean = false;

  ngOnInit(): void {
    let initStatus = this.data().IsCompleted;
    this.originalCompleteStatus = initStatus;
    this.currentCompleteStatus = initStatus;
  }

  showInfoPanel = () => {
    this.globalEmitter.sendData(this.data(), GlobalEmitType.ViewInfo);
  }

  deleteThisItem = () => {
    this.globalEmitter.sendData(this.key(), GlobalEmitType.Delete);
  }

  changeCompleteStatus = () => {
    let payload: DictionaryEntry = {
      key: this.key(),
      item: this.data()
    };

    this.globalEmitter.sendData(payload, GlobalEmitType.SaveChanges);
    //Get rid of save button.
    this.attemptedToggle = false;
    let initStatus = this.data().IsCompleted;
    this.originalCompleteStatus = initStatus;
    this.currentCompleteStatus = initStatus;
  }

  attemptToggleCompleted = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.currentCompleteStatus = input.checked;
    this.attemptedToggle = this.currentCompleteStatus !== this.originalCompleteStatus;

    let modifiedItem: ListItem = {
      ...this.data(),
      IsCompleted: this.currentCompleteStatus,
    }
    let newDictEntry: DictionaryEntry = {
      key: this.key(),
      item: modifiedItem
    }
    this.globalEmitter.sendData(newDictEntry, GlobalEmitType.ToggleCompleted);
  }
}
