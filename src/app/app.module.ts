import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameHLComponent } from './game-hl/game-hl.component';
import { HangmanGameComponent } from './hangman-game/hangman-game.component';
import { CaliforniaSpeedGameComponent } from './california-speed-game/california-speed-game.component';
import { ScholarshipApplicationComponent } from './scholarship-application/scholarship-application.component';
import { CreditCardValidatorComponent } from './credit-card-validator/credit-card-validator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameHLComponent,
    HangmanGameComponent,
    CaliforniaSpeedGameComponent,
    ScholarshipApplicationComponent,
    CreditCardValidatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'game-hl', component: GameHLComponent },
      { path: 'hangman-game', component: HangmanGameComponent },
      { path: 'california-speed-game', component: CaliforniaSpeedGameComponent },
      { path: 'scholarship-application', component: ScholarshipApplicationComponent },
      { path: 'Card-Validator', component: CreditCardValidatorComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
