import { Component, OnInit } from '@angular/core';
import { Globals } from "../globals";
declare var Reveal;

@Component({
  selector: 'app-side-projects',
  templateUrl: './side-projects.component.html',
  styleUrls: ['./side-projects.component.css']
})
export class SideProjectsComponent {

  public breadcrumbs:Array<any> = [
    { name: 'home', link: '/main' },
    { name: 'side projects' },
  ];

  constructor() { }

  ngAfterViewInit() {
    Reveal.reveal('div.row', Globals.AnimationDuration);
  }

}
