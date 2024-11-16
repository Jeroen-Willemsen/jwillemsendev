import {AboutMeComponent} from './components/about-me/about-me.component';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {ContactMeComponent} from './components/contact-me/contact-me.component';
import {DocumentListComponent} from './document-list/document-list.component';
import {NgModule} from '@angular/core';
import {SideProjectsComponent} from './components/side-projects/side-projects.component';
import {WorksComponent} from './components/works/works.component';
import {HangmanGameComponent} from './hangman-game/hangman-game.component';
import {MemoryGameComponent} from './memory-game/memory-game.component';
import {SnakeGameComponent} from './snake-game/snake-game.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    ContactMeComponent,
  ],
  imports: [
    BrowserModule,
    DocumentListComponent,
    WorksComponent,
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
