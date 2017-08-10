import { Component, OnInit } from '@angular/core';
declare var Reveal;
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  public breadcrumbs:Array<any> = [
    { name: 'home', link: '/main' },
    { name: 'education' },
  ];

  constructor() { }

  ngOnInit() {
    Reveal.reveal('div.row', 20);
  }

}
