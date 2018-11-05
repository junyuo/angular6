import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CribsService {

  constructor(private http: HttpClient) { }

  getAllCribs() {
    return this.http.get<any[]>('../../assets/data/cribs.json');
  }

}
