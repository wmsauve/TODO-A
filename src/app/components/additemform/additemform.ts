import { Component, output  } from '@angular/core';
import { Stdbutton } from '../stdbutton/stdbutton';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListItem } from '../../../model/defs.type';

@Component({
  selector: 'app-additemform',
  imports: [Stdbutton, ReactiveFormsModule],
  templateUrl: './additemform.html',
  styleUrl: './additemform.scss'
})
export class Additemform {
  addPressed = output<ListItem>();

  itemForm = new FormGroup({
    label: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    dueDate: new FormControl('', Validators.required)
  });

  addItemAction = () => {
    const vals = this.itemForm.value;
    if(vals.dueDate == null 
      || vals.dueDate === ''
      || vals.label == null
      || vals.label === ''){
        alert("Empty values for either label or due date. Please enter something.");
        return;
    }
    
    if(vals.description == null || vals.description == undefined){
       vals.description = '';
    }

    //DateTime time.
    let formattedTime = new Date(vals.dueDate).toISOString().split(`.`)[0];
    let newItem : ListItem = {
      Label: vals.label,
      Description: vals.description,
      DueDate: formattedTime,
      IsCompleted: false,
    }; 

    this.addPressed.emit(newItem);
  }
}
