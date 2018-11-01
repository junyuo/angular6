import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  isEdited = false;

  constructor(public dataSvc: DataService) {
  }

  ngOnInit() {
  }

}
