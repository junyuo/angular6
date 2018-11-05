import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CribsService {

  public newCribSubject = new Subject<any>();

  constructor(private http: HttpClient) { }

  getAllCribs() {
    return this.http.get<any[]>('../../assets/data/cribs.json');
  }

  addCrib(data) {
    data.image = 'default-crib';
    this.newCribSubject.next(data);
  }

}
