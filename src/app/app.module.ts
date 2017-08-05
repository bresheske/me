import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { InterestComponent } from './interest/interest.component';
import { MainComponent } from './main/main.component';
import { CurrentWorkComponent } from './current-work/current-work.component';
import { HomeAutomationComponent } from './home-automation/home-automation.component';
import { EducationComponent } from './education/education.component';
import { WritingsComponent } from './writings/writings.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'current-work', component: CurrentWorkComponent },
  { path: 'home-automation', component: HomeAutomationComponent },
  { path: 'education', component: EducationComponent },
  { path: 'writings', component: WritingsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    InterestComponent,
    MainComponent,
    CurrentWorkComponent,
    HomeAutomationComponent,
    EducationComponent,
    WritingsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,  {}),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
