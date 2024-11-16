import {AboutMeComponent} from './components/about-me/about-me.component';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {ContactMeComponent} from './components/contact-me/contact-me.component';
import {DocumentListComponent} from './components/linguistics/document-list/document-list.component';
import {NgModule} from '@angular/core';
import {SideProjectsComponent} from './components/side-projects/side-projects.component';
import {LinguisticsComponent} from './components/linguistics/linguistics.component';
import {HangmanGameComponent} from './components/side-projects/games/hangman-game/hangman-game.component';
import {MemoryGameComponent} from './components/side-projects/games/memory-game/memory-game.component';
import {SnakeGameComponent} from './components/side-projects/games/snake-game/snake-game.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    ContactMeComponent,
  ],
  imports: [
    BrowserModule,
    DocumentListComponent,
    LinguisticsComponent,
    HangmanGameComponent,
    MemoryGameComponent,
    SnakeGameComponent,
    SideProjectsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
