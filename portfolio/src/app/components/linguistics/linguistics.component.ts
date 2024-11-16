import {Component} from '@angular/core';
import {DocumentListComponent} from './document-list/document-list.component';
import {HangmanGameComponent} from '../side-projects/games/hangman-game/hangman-game.component';
import {MemoryGameComponent} from '../side-projects/games/memory-game/memory-game.component';
import {NgIf} from '@angular/common';
import {SnakeGameComponent} from '../side-projects/games/snake-game/snake-game.component';
import {TicTacToeComponent} from '../side-projects/games/tic-tac-toe/tic-tac-toe.component';
import {WhackAMoleComponent} from '../side-projects/games/whack-a-mole/whack-a-mole.component';
import {PopularScienceComponent} from './popular-science/popular-science.component';
import {PublicationsComponent} from './publications/publications.component';
import {TheRetaLanguageComponent} from './the-reta-language/the-reta-language.component';

@Component({
  selector: 'app-linguistics',
  standalone: true,
  imports: [DocumentListComponent, HangmanGameComponent, MemoryGameComponent, NgIf, SnakeGameComponent, TicTacToeComponent, WhackAMoleComponent, PopularScienceComponent, PublicationsComponent, TheRetaLanguageComponent],
  templateUrl: './linguistics.component.html',
  styleUrls: ['./linguistics.component.scss'],
})
export class LinguisticsComponent {
  selectedTab: string = '';

  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }

  projects = [
    {
      title: 'Project A',
      description: 'Description of Project A.',
      image: 'assets/images/project-a.jpg',
    },
    {
      title: 'Project B',
      description: 'Description of Project B.',
      image: 'assets/images/project-b.jpg',
    },
  ];
}
