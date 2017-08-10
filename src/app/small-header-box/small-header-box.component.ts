import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-header-box',
  templateUrl: './small-header-box.component.html',
  styleUrls: ['./small-header-box.component.css']
})
export class SmallHeaderBoxComponent implements OnInit {
  @Input() public header: string;
  @Input() public text: string;

  constructor() { }

  ngOnInit() {
  }

}
