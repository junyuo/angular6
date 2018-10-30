import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgUrl = '/assets/images/logo.png';
  wordCount = 0;

  public searchText: string;

  constructor() {
  }

  ngOnInit(): void {
    this.searchText = '';
  }

  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = 'The Will Will Web';
    } else {
      this.title = 'app';
    }
  }

  // 清除所輸入的關鍵字
  escapeEvent() {
    this.searchText = '';
  }

  changeKeyword(keyword: string) {
    this.wordCount = keyword.length;
  }

  clearKeyword(input: HTMLInputElement) {
    this.wordCount = 0;
    input.value = '';
  }

}
