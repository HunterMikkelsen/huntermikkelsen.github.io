import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardValidatorComponent } from './credit-card-validator.component';

describe('CreditCardValidatorComponent', () => {
  let component: CreditCardValidatorComponent;
  let fixture: ComponentFixture<CreditCardValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
