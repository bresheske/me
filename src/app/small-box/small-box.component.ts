import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-small-box',
  templateUrl: './small-box.component.html',
  styleUrls: ['./small-box.component.css']
})
export class SmallBoxComponent implements OnInit {
  @Input() public index:string;
  @Input() public text:string;
  @Input() public header:string;
  @Input() public icon:string;
  @Input() public link:string;
  @Input() public size:string = "4";

  private router:Router;

  constructor(router:Router) { 
    this.router = router;
  }

  ngOnInit() {
  }

  click() {
    if (!this.icon)
      return;

    this.router.navigateByUrl(this.link);
  }

}
