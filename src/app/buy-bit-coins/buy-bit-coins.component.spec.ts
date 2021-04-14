import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyBitCoinsComponent } from './buy-bit-coins.component';

describe('BuyBitCoinsComponent', () => {
  let component: BuyBitCoinsComponent;
  let fixture: ComponentFixture<BuyBitCoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyBitCoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyBitCoinsComponent);
    component = fixture.c