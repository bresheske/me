import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingAgileComponent } from './writing-agile.component';

describe('WritingAgileComponent', () => {
  let component: WritingAgileComponent;
  let fixture: ComponentFixture<WritingAgileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritingAgileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingAgileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
