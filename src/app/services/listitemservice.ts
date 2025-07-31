import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CreateResponse, GetAllResponse, ListItem } from '../../model/defs.type';

@Injectable({
  providedIn: 'root'
})
export class Listitemservice {
  url = environment.mainUrl;
  http = inject(HttpClient);
  getAllListItems() {
    return this.http.get<GetAllResponse>(this.url);
  }

  postNewItem(newItem: ListItem) {
    return this.http.post<CreateResponse>(this.url, newItem);
  }
}
