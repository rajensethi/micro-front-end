import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationslibComponent } from './donationslib.component';

describe('DonationslibComponent', () => {
  let component: DonationslibComponent;
  let fixture: ComponentFixture<DonationslibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationslibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationslibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
