import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GlobalEmitPayload, GlobalEmitType } from '../../model/defs.type';

@Injectable({
  providedIn: 'root'
})
export class Emithandlerservice {
  genericData = new Subject<GlobalEmitPayload>();
  data$ = this.genericData.asObservable();

  sendData(passedData: any, passedType: GlobalEmitType){
    let payload: GlobalEmitPayload = {
      data: passedData,
      type: passedType
    }
    this.genericData.next(payload);
  }
}
