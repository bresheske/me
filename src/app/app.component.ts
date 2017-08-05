import { Component } from '@angular/core';
declare var ScrollReveal;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor() {
    window['Reveal'] = ScrollReveal({ duration: 600 });
  }

  ngOnInit() {
    
  }
}
