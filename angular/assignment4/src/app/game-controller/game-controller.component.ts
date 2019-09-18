import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<number>();
  @Output('oddNumber') odd = [];
  @Output('evenNumber')even = [];
  lastNumber = 0;
  interval;

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber++);
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

}
