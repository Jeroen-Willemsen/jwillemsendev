import {Component} from '@angular/core';
import {NgForOf, NgIf, UpperCasePipe} from '@angular/common';
import {HangmanGameComponent} from '../../hangman-game/hangman-game.component';
import {SnakeGameComponent} from '../../snake-game/snake-game.component';
import {MemoryGameComponent} from '../../memory-game/memory-game.component';

@Component({
  selector: 'app-side-projects',
  standalone: true,
  imports: [
    HangmanGameComponent,
    MemoryGameComponent,
    SnakeGameComponent,
    NgIf,
  ],
  templateUrl: './side-projects.component.html',
  styleUrl: './side-projects.component.scss'
})
export class SideProjectsComponent {
  selectedTab: string = 'componentA';

  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }
}
