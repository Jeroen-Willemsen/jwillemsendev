import {AboutMeComponent} from './components/about-me/about-me.component';
import {BrowserModule} from '@angular/platform-browser';
import {ContactMeComponent} from './components/contact-me/contact-me.component';
import {DevelopmentSkillsComponent} from "./components/programming/development-skills/development-skills.component";
import {HangmanGameComponent} from './components/side-projects/games/hangman-game/hangman-game.component';
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';
import {LinguisticsComponent} from './components/linguistics/linguistics.component';
import {MemoryGameComponent} from './components/side-projects/games/memory-game/memory-game.component';
import {NgModule} from '@angular/core';
import {SideProjectsComponent} from './components/side-projects/side-projects.component';
import {SnakeGameComponent} from './components/side-projects/games/snake-game/snake-game.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    LinguisticsComponent,
    HangmanGameComponent,
    MemoryGameComponent,
    SnakeGameComponent,
    SideProjectsComponent,
    HighlightModule,
    DevelopmentSkillsComponent,
    AboutMeComponent,
    ContactMeComponent
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      languages: {
        python: () => import('highlight.js/lib/languages/python'),
      },
    },
  },
  ]
})
export class AppModule {}
