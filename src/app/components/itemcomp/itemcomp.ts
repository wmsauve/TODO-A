import { Component, input } from '@angular/core';
import { ListItem } from '../../../model/defs.type';
import { Stdbutton } from "../stdbutton/stdbutton";

@Component({
  selector: 'app-itemcomp',
  imports: [Stdbutton],
  templateUrl: './itemcomp.html',
  styleUrl: './itemcomp.scss'
})
export class Itemcomp {
  data = input.required<ListItem>();

  showInfoPanel() {
    console.log("yo bro dude.");
  }
}
