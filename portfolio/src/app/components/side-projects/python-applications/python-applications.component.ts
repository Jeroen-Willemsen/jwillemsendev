import {Component} from '@angular/core';
import {SimpleCalculatorComponent} from './simple-calculator/simple-calculator.component';
import {SimpleDutchWeatherAppComponent} from './simple-dutch-weather-app/simple-dutch-weather-app.component';
import {IpaPickerLatexConverterComponent} from './ipa-picker-latex-converter/ipa-picker-latex-converter.component';
import {HangmanGameComponent} from '../games/hangman-game/hangman-game.component';
import {MemoryGameComponent} from '../games/memory-game/memory-game.component';
import {NgIf} from '@angular/common';
import {SnakeGameComponent} from '../games/snake-game/snake-game.component';
import {TicTacToeComponent} from '../games/tic-tac-toe/tic-tac-toe.component';
import {WhackAMoleComponent} from '../games/whack-a-mole/whack-a-mole.component';

@Component({
  selector: 'app-python-applications',
  standalone: true,
  imports: [SimpleCalculatorComponent,
    SimpleDutchWeatherAppComponent,
    IpaPickerLatexConverterComponent, HangmanGameComponent, MemoryGameComponent, NgIf, SnakeGameComponent, TicTacToeComponent, WhackAMoleComponent],
  templateUrl: './python-applications.component.html',
  styleUrl: './python-applications.component.scss'
})
export class PythonApplicationsComponent {
  selectedTab: string = 'app-ipa-picker-latex-converter';

  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }
}
