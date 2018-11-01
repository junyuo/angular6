import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  isEdited = false;
  data$: Observable<any>;

  constructor(public dataSvc: DataService) {
  }

  ngOnInit() {
    this.data$ = this.dataSvc.getData();
  }

}
