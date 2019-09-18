import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  odd = [];
  even = [];

  inIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.even.push(firedNumber);
    } else {
      this.odd.push(firedNumber);
    }
  }

  ngOnInit() {
  }

}
