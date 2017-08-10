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
    Reveal.reveal('div.row', 20);
  }

}
