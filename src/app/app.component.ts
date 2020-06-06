import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-dev-trial';
  contents = [];

  ngOnInit() {
    this.cloneContent(12);
  }

  cloneContent(count: number) {
    for (let i = 0; i < count; i++) {
      this.contents.push({});
    }
  }

}
