import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgUrl = '/assets/images/logo.png';

  changeTitle($event) {
    if ($event.altKey) {
      this.title = 'The Will Will Web';
    }
    console.log($event);
  }

}
