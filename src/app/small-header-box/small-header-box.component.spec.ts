import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallHeaderBoxComponent } from './small-header-box.component';

describe('SmallHeaderBoxComponent', () => {
  let component: SmallHeaderBoxComponent;
  let fixture: ComponentFixture<SmallHeaderBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallHeaderBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallHeaderBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
