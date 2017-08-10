import { Component, OnInit } from '@angular/core';
declare var Reveal;
@Component({
  selector: 'app-writings',
  templateUrl: './writings.component.html',
  styleUrls: ['./writings.component.css']
})
export class WritingsComponent implements OnInit {
  public breadcrumbs:Array<any> = [
    { name: 'home', link: '/main' },
    { name: 'writings' },
  ];

  constructor() { }

  ngOnInit() {
    Reveal.reveal('div.row', 20);
  }

}
