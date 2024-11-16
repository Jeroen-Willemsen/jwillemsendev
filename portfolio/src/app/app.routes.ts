import {Routes} from '@angular/router';
import {WorksComponent} from './components/works/works.component';
import {AboutMeComponent} from './components/about-me/about-me.component';
import {SideProjectsComponent} from './components/side-projects/side-projects.component';
import {ContactMeComponent} from './components/contact-me/contact-me.component';
import {TicTacToeComponent} from './tic-tac-toe/tic-tac-toe.component';
import {MemoryGameComponent} from './memory-game/memory-game.component';
import {HangmanGameComponent} from './hangman-game/hangman-game.component';

export const routes: Routes = [
  {path: '', redirectTo: '/about-me', pathMatch: 'full'},
  {path: 'works', component: WorksComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'side-projects', component: SideProjectsComponent},
  {path: 'contact-me', component: ContactMeComponent},
  {path: 'tic-tac-toe', component: TicTacToeComponent},
  {path: 'memory-game', component: MemoryGameComponent},
  {path: 'hangman-game', component: HangmanGameComponent},
  // Optionally add a wildcard route for a 404 page
  // { path: '**', component: PageNotFoundComponent },
];
