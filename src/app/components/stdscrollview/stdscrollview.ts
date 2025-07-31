import { Component, input, OnInit, signal } from '@angular/core';
import { Itemcomp } from "../itemcomp/itemcomp";
import { GetAllResponse, ListItem } from '../../../model/defs.type';

@Component({
  selector: 'app-stdscrollview',
  imports: [Itemcomp],
  templateUrl: './stdscrollview.html',
  styleUrl: './stdscrollview.scss'
})

//This is not actually standard. Oops.
export class Stdscrollview {
  listItemDictionary = input.required<GetAllResponse>();

  getListItemValues(): Array<ListItem>{
    return Object.values(this.listItemDictionary().AllItems);
  }
}
