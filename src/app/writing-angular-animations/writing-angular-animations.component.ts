import { Component, OnInit } from '@angular/core';
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
    Reveal.reveal('div.row', 20);
  }

}
