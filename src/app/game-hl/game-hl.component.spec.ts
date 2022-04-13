import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHLComponent } from './game-hl.component';

describe('GameHLComponent', () => {
  let component: GameHLComponent;
  let fixture: ComponentFixture<GameHLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameHLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameHLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
