import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
declare var Reveal;
@Component({
  selector: 'app-writing-angular-animations',
  templateUrl: './writing-angular-animations.component.html',
  styleUrls: ['./writing-angular-animations.component.css']
})
export class WritingAngularAnimationsComponent implements OnInit {

  public breadcrumbs:Array<any> = [
    { name: 'home', link: '/main' },
    { name: 'writings', link: '/writings' },
    { name: 'angular animations made easy' },
  ];
  constructor() { }

  ngOnInit() {
    Reveal.reveal('h1,h3,p,pre', Globals.AnimationDuration);
  }

}
