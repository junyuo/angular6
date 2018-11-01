import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  isEdited = false;
  data;

  constructor(public dataSvc: DataService) {
  }

  ngOnInit() {
    this.dataSvc.getData().subscribe(result => {
      this.data = result;
    });
  }

  public doDelete(item) {
    this.dataSvc.doDelete(item).subscribe(result => {
      this.data =
        this.data.filter((v) => {
          return v.id !== item.id;
        });
    },
      (error) => {
        console.log(error);
      });
  }

  public doModify(post: any) {
    this.dataSvc.doModify(post).subscribe(result => {
      this.data = this.data.map((item) => {
        if (item.id === post.id) {
          return Object.assign({}, item, post);
        }
        return item;
      }, (error) => console.log(error));
    });
  }

}
