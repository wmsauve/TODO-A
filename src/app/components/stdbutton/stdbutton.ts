import { Component, input } from '@angular/core';
import { ListItem } from '../../../model/defs.type';

@Component({
  selector: 'app-stdbutton',
  imports: [],
  templateUrl: './stdbutton.html',
  styleUrl: './stdbutton.scss'
})
export class Stdbutton {
  label = input.required<string>();
  action = input.required<() => void>();

  handleClick(): void {
    this.action()();
  }
}
