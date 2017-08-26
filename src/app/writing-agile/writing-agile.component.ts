import { Component, OnInit } from '@angular/core';
import { Globals } from "../globals";
declare var Reveal;

@Component({
  selector: 'app-writing-agile',
  templateUrl: './writing-agile.component.html',
  styleUrls: ['./writing-agile.component.css']
})
export class WritingAgileComponent implements OnInit {

  public breadcrumbs:Array<any> = [
    { name: 'home', link: '/main' },
    { name: 'writings', link: '/writings' },
    { name: 'agile thoughts' },
  ];
  constructor() { }

  ngOnInit() {
    Reveal.reveal('h1,h3,p,pre,li', Globals.AnimationDuration);
  }
}
