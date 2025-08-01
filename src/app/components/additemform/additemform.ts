import { Component, inject  } from '@angular/core';
import { Stdbutton } from '../stdbutton/stdbutton';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GlobalEmitType, ListItem } from '../../../model/defs.type';
import { Emithandlerservice } from '../../services/emithandlerservice';

@Component({
  selector: 'app-additemform',
  imports: [Stdbutton, ReactiveFormsModule],
  templateUrl: './additemform.html',
  styleUrl: './additemform.scss'
})
export class Additemform {
  globalEmitter = inject(Emithandlerservice);
  
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

    //LOL, this ain't it. Needs refactor to handle empty values more generally.
    let handleDescription = vals.description;
    if(handleDescription == null || handleDescription == undefined || handleDescription === '') {
      handleDescription = " ";
    }

    //DateTime time.
    let formattedTime = new Date(vals.dueDate).toISOString().split(`.`)[0];
    let newItem : ListItem = {
      Label: vals.label,
      Description: handleDescription,
      DueDate: formattedTime,
      IsCompleted: false,
    }; 

    console.log(newItem);

    this.globalEmitter.sendData(newItem, GlobalEmitType.AddItem);
  }
}
