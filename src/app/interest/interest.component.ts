import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {
  @Input() public text:string;
  @Input() public icon:string;
  @Input() public link:string;

  private router:Router;

  constructor(router:Router) { 
    this.router = router;
  }

  ngOnInit() {
  }

  click() {
    if (!this.link)
      return;

    this.router.navigateByUrl(this.link);
  }

}
