import { Time } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  @ViewChild('cd', { static: false }) countdown: CountdownComponent | undefined;

  constructor() {

  }
  title = 'score_board';

  score: number = 0;
  config: any = {
    leftTime: 30,
    demand: true
  }

  color: string = "red";

//function viết như này này 
  plusOne() {
    //This is new comment
    this.score++;
  }

  countdownBegin() {
    // lam,2 gi2 lam2
    this.countdown?.begin();
  }

  countdownPause() {
    //Dem loi, abc
    this.countdown?.pause();
  }

  countdownRestart() {
    this.config = {
      leftTime: 50,
      demand: true
    };
  }
}
