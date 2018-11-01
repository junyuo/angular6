import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RSA_SSLV23_PADDING } from 'constants';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data;

  constructor(private httpClient: HttpClient) {
    httpClient.get('../../api/articles.json').subscribe((res) => {
      this.data = res;
    });
  }

  run() {
  }

  public doDelete(item) {
    this.data =
      this.data.filter((v) => {
        return v.id !== item.id;
      });
  }

  public doModify(post: any) {
    this.data = this.data.map((item) => {
      if (item.id === post.id) {
        return Object.assign({}, item, post);
      }
      return item;
    });
  }
}
