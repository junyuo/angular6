import { Component, OnInit, Input, OnDestroy, Output, EventEmitter, OnChanges } from '@angular/core';


@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent implements OnInit, OnDestroy, OnChanges {

  @Input()
  item;

  @Output()
  delete = new EventEmitter<any>();

  @Output()
  titleChanged = new EventEmitter<any>();

  isEdited = false;
  origItem;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes): void {
    if (changes.item) {
      this.origItem = changes.item.currentValue;
      this.item = Object.assign({}, changes.item.currentValue);
    }
  }

  ngOnDestroy(): void {
  }

  deleteArticle() {
    if (confirm('Are you sure to delete?')) {
      this.delete.emit(this.item);
    }
  }

  doCancel() {
    this.item = Object.assign({}, this.origItem);
    this.isEdited = false;
  }

  doEdit(title) {
    this.titleChanged.emit(this.item);
  }

}
