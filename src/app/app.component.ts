import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var ScrollReveal;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public github;
  
  constructor(
    private http: HttpClient) {
    window['Reveal'] = ScrollReveal({ duration: 600 });
  }

  ngOnInit() {
    window['Reveal'].reveal('.row', 10);
    this.loadGithub();
  }

  public async loadGithub() {
    const repos: any[] = await this.http.get<any[]>('https://api.github.com/users/bresheske/repos?sort=committer-date-desc')
      .toPromise();
    this.github = repos
      .filter(r => r.description && r.description.length > 0)
      .filter(r => r.name !== "bresheske.github.io" && r.name !=="me")
      .slice(0, 10);
  }
}
