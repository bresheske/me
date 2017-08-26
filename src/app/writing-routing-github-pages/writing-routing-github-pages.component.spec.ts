import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingRoutingGithubPagesComponent } from './writing-routing-github-pages.component';

describe('WritingRoutingGithubPagesComponent', () => {
  let component: WritingRoutingGithubPagesComponent;
  let fixture: ComponentFixture<WritingRoutingGithubPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritingRoutingGithubPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingRoutingGithubPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
