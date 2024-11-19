import {AboutMeComponent} from './components/about-me/about-me.component';
import {BrowserModule} from '@angular/platform-browser';
import {ContactMeComponent} from './components/contact-me/contact-me.component';
import {HangmanGameComponent} from './components/side-projects/games/hangman-game/hangman-game.component';
import {HighlightModule, HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import {LinguisticsComponent} from './components/linguistics/linguistics.component';
import {MemoryGameComponent} from './components/side-projects/games/memory-game/memory-game.component';
import {NgModule} from '@angular/core';
import {SideProjectsComponent} from './components/side-projects/side-projects.component';
import {SnakeGameComponent} from './components/side-projects/games/snake-game/snake-game.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    ContactMeComponent,
  ],
  imports: [
    BrowserModule,
    LinguisticsComponent,
    HangmanGameComponent,
    MemoryGameComponent,
    SnakeGameComponent,
    SideProjectsComponent,
    HighlightModule
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      // Configure languages to load
      languages: {
        python: () => import('highlight.js/lib/languages/python'),
        // add other languages if needed
      },
    },
  },
]
})
export class AppModule {}
