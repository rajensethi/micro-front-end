import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterlibComponent } from './masterlib.component';

describe('MasterlibComponent', () => {
  let component: MasterlibComponent;
  let fixture: ComponentFixture<MasterlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
