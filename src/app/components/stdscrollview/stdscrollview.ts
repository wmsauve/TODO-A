import { Component, input } from '@angular/core';
import { Itemcomp } from "../itemcomp/itemcomp";
import { DictionaryEntry, GetAllResponse } from '../../../model/defs.type';

@Component({
  selector: 'app-stdscrollview',
  imports: [Itemcomp],
  templateUrl: './stdscrollview.html',
  styleUrl: './stdscrollview.scss'
})

//This is not actually standard. Oops.
export class Stdscrollview {
  listItemDictionary = input.required<GetAllResponse>();

  getListItemValues(): DictionaryEntry[] {
    return Object.entries(this.listItemDictionary().AllItems).map(([key, item]) => ({ key, item }));
  }
}
