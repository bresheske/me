import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
declare var Reveal;
@Component({
  selector: 'app-writing-routing-github-pages',
  templateUrl: './writing-routing-github-pages.component.html',
  styleUrls: ['./writing-routing-github-pages.component.css']
})
export class WritingRoutingGithubPagesComponent implements OnInit {
  public breadcrumbs:Array<any> = [
    { name: 'home', link: '/main' },
    { name: 'writings', link: '/writings' },
    { name: 'angular routing with github pages' },
  ];

  constructor() { }

  ngOnInit() {
    Reveal.reveal('h1,h3,p,pre,li', Globals.AnimationDuration);
  }

}
