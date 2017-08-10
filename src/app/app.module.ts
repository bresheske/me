import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CurrentWorkComponent } from './current-work/current-work.component';
import { EducationComponent } from './education/education.component';
import { WritingsComponent } from './writings/writings.component';
import { SmallBoxComponent } from './small-box/small-box.component';
import { SideProjectsComponent } from './side-projects/side-projects.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { AddressBoxComponent } from './address-box/address-box.component';
import { SmallHeaderBoxComponent } from './small-header-box/small-header-box.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'current-work', component: CurrentWorkComponent },
  { path: 'education', component: EducationComponent },
  { path: 'writings', component: WritingsComponent },
  { path: 'side-projects', component: SideProjectsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CurrentWorkComponent,
    EducationComponent,
    WritingsComponent,
    SmallBoxComponent,
    SideProjectsComponent,
    BreadcrumbComponent,
    AddressBoxComponent,
    SmallHeaderBoxComponent
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
