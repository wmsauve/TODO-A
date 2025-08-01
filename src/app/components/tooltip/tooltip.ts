import { Component, input } from '@angular/core';
import { ListItem } from '../../../model/defs.type';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.scss'
})
export class Tooltip {

  //Can add condition to hide completed instead of showing false when nothing selected.
  selectedItem = input<ListItem>();
}
