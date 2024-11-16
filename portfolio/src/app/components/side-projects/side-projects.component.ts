import {Component} from '@angular/core';
import {HangmanGameComponent} from './games/hangman-game/hangman-game.component';
import {MemoryGameComponent} from './games/memory-game/memory-game.component';
import {NgIf} from '@angular/common';
import {SnakeGameComponent} from './games/snake-game/snake-game.component';
import {TicTacToeComponent} from './games/tic-tac-toe/tic-tac-toe.component';
import {TypingSpeedTestComponent} from './games/typing-speed-test/typing-speed-test.component';
import {WhackAMoleComponent} from './games/whack-a-mole/whack-a-mole.component';

@Component({
  selector: 'app-side-projects',
  standalone: true,
  imports: [
    HangmanGameComponent,
    MemoryGameComponent,
    NgIf,
    SnakeGameComponent,
    TicTacToeComponent,
    TypingSpeedTestComponent,
    WhackAMoleComponent,
  ],
  templateUrl: './side-projects.component.html',
  styleUrl: './side-projects.component.scss'
})
export class SideProjectsComponent {
  selectedTab: string = '';

  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }
}
