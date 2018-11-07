import { Component, OnInit } from '@angular/core';
import { CribsService } from '../service/cribs.service';
import { UtilService } from '../service/util.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any>;
  error: string;
  sortField = 'price';
  sortFields: Array<string> = ['address', 'area', 'bathrooms', 'bedrooms', 'price', 'type'];
  sortDirection = 'asc';

  constructor(public cribsService: CribsService,
    public utilService: UtilService) { }

  ngOnInit() {
    this.cribsService.getAllCribs().subscribe(data => {
      this.cribs = data;
    }, (error) => {
      console.error(error);
      this.error = error.statusText;
    });

    this.cribsService.newCribSubject.subscribe(data => {
      this.cribs = [data, ...this.cribs];
    });
  }

}
