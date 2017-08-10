import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingAngularAnimationsComponent } from './writing-angular-animations.component';

describe('WritingAngularAnimationsComponent', () => {
  let component: WritingAngularAnimationsComponent;
  let fixture: ComponentFixture<WritingAngularAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritingAngularAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingAngularAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
