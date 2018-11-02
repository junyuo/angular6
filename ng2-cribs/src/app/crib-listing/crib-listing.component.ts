import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('../../assets/data/cribs.json').subscribe(data => {
      this.cribs = data;
    }, (error) => { console.error(error); });

  }

}
