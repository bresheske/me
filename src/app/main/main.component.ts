import { Component, OnInit } from '@angular/core';
declare var Reveal;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor() {

  }

  ngAfterViewInit() {
    console.log("Main: Init.");
    Reveal.reveal('div', 30);
  }

}
