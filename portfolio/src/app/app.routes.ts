import {AboutMeComponent} from './components/about-me/about-me.component';
import {ContactMeComponent} from './components/contact-me/contact-me.component';
import {DevelopmentSkillsComponent} from './components/programming/development-skills/development-skills.component';
import {HangmanGameComponent} from './components/programming/side-projects/games/hangman-game/hangman-game.component';
import {LinguisticsComponent} from './components/linguistics/linguistics.component';
import {MemoryGameComponent} from './components/programming/side-projects/games/memory-game/memory-game.component';
import {ProgrammingComponent} from './components/programming/programming.component';
import {Routes} from '@angular/router';
import {SideProjectsComponent} from './components/programming/side-projects/side-projects.component';
import {SnakeGameComponent} from './components/programming/side-projects/games/snake-game/snake-game.component';
import {TicTacToeComponent} from './components/programming/side-projects/games/tic-tac-toe/tic-tac-toe.component';
import {TypingSpeedTestComponent} from './components/programming/side-projects/games/typing-speed-test/typing-speed-test.component';
import {WhackAMoleComponent} from './components/programming/side-projects/games/whack-a-mole/whack-a-mole.component';

export const routes: Routes = [
  {path: '', redirectTo: '/about-me', pathMatch: 'full'},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'contact-me', component: ContactMeComponent},
  {path: 'development-skills', component: DevelopmentSkillsComponent},
  {path: 'hangman-game', component: HangmanGameComponent},
  {path: 'linguistics', component: LinguisticsComponent},
  {path: 'memory-game', component: MemoryGameComponent},
  {path: 'programming', component: ProgrammingComponent},
  {path: 'side-projects', component: SideProjectsComponent},
  {path: 'snake-game', component: SnakeGameComponent},
  {path: 'tic-tac-toe', component: TicTacToeComponent},
  {path: 'typing-speed-test', component: TypingSpeedTestComponent},
  {path: 'whack-a-mole-game', component: WhackAMoleComponent},
  // {path: '**', component: PageNotFoundComponent},
];
