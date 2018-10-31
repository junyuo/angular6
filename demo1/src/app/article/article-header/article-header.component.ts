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

  @Output()
  titleChanged = new EventEmitter<any>();

  newTitle = '';

  constructor() { }

  ngOnInit() {
    this.newTitle = this.item.title;
  }

  ngOnDestroy(): void {
  }

  deleteArticle() {
    if (confirm('Are you sure to delete?')) {
      this.delete.emit(this.item);
    }
  }

  doEdit(title) {
    this.newTitle = title;
    this.titleChanged.emit({ id: this.item.id, title: title });
  }

}
