import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaliforniaSpeedGameComponent } from './california-speed-game.component';

describe('CaliforniaSpeedGameComponent', () => {
  let component: CaliforniaSpeedGameComponent;
  let fixture: ComponentFixture<CaliforniaSpeedGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaliforniaSpeedGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaliforniaSpeedGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
