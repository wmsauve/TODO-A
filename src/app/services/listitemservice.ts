import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BaseResponse, CreateResponse, GetAllResponse, ListItem } from '../../model/defs.type';

@Injectable({
  providedIn: 'root'
})
export class Listitemservice {
  url = environment.mainUrl;
  http = inject(HttpClient);
  
  appendEndpoint(url: string, end: string): string {
    return url + "/" + end;
  }
  
  getAllListItems() {
    return this.http.get<GetAllResponse>(this.url);
  }

  postNewItem(newItem: ListItem) {
    return this.http.post<CreateResponse>(this.url, newItem);
  }

  deleteThisItem(key: string) {
    return this.http.delete<GetAllResponse>(this.appendEndpoint(this.url, key));
  }

  saveChangesToItem(key: string, targetItem: ListItem){
    return this.http.post<BaseResponse>(this.appendEndpoint(this.url, key), targetItem);
  }
}
