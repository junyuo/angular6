import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RSA_SSLV23_PADDING } from 'constants';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  getData() {
    return this.httpClient.get('http://localhost:4200/api/articles.json');
  }

  public doDelete(item) {
    return this.httpClient.delete('http://localhost:4200/api/articles/' + item.id);
  }

  public doModify(post: any) {
    return this.httpClient.put('http://localhost:4200/api/articles/' + post.id, post);
  }

}
