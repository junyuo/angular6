import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleHeaderComponent } from './article-header/article-header.component';
import { ArticleBodyComponent } from './article-body/article-body.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ArticleListComponent, ArticleHeaderComponent, ArticleBodyComponent],
  exports: [ArticleListComponent],
  providers: [DataService]
})
export class ArticleModule {

}
