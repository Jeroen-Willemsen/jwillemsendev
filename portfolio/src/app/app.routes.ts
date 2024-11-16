import {AboutMeComponent} from './components/about-me/about-me.component';
import {ContactMeComponent} from './components/contact-me/contact-me.component';
import {HangmanGameComponent} from './components/side-projects/games/hangman-game/hangman-game.component';
import {MemoryGameComponent} from './components/side-projects/games/memory-game/memory-game.component';
import {Routes} from '@angular/router';
import {SideProjectsComponent} from './components/side-projects/side-projects.component';
import {TicTacToeComponent} from './components/side-projects/games/tic-tac-toe/tic-tac-toe.component';
import {WhackAMoleComponent} from './components/side-projects/games/whack-a-mole/whack-a-mole.component';
import {LinguisticsComponent} from './components/linguistics/linguistics.component';
import {SnakeGameComponent} from './components/side-projects/games/snake-game/snake-game.component';
import {TypingSpeedTestComponent} from './components/side-projects/games/typing-speed-test/typing-speed-test.component';

export const routes: Routes = [
  {path: '', redirectTo: '/about-me', pathMatch: 'full'},
  {path: 'linguistics', component: LinguisticsComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'side-projects', component: SideProjectsComponent},
  {path: 'contact-me', component: ContactMeComponent},
  {path: 'tic-tac-toe', component: TicTacToeComponent},
  {path: 'memory-game', component: MemoryGameComponent},
  {path: 'hangman-game', component: HangmanGameComponent},
  {path: 'whack-a-mole-game', component: WhackAMoleComponent},
  {path: 'snake-game', component: SnakeGameComponent},
  {path: 'typing-speed-test', component: TypingSpeedTestComponent},
  // Optionally add a wildcard route for a 404 page
  // { path: '**', component: PageNotFoundComponent },
];
