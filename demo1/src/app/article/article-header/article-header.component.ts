import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent implements OnInit, OnDestroy {

  @Input()
  item;

  @Output()
  delete = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  deleteArticle() {
    this.delete.emit(this.item);
  }

}
