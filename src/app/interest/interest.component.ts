import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {
  @Input() public text:string;
  @Input() public icon:string;

  constructor() { }

  ngOnInit() {
  }

}
