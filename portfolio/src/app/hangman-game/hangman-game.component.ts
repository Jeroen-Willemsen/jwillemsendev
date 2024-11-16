import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-hangman-game',
  standalone: true,
  imports: [
    UpperCasePipe,
    NgIf,
    NgForOf,
    NgForOf,
    NgIf,
    NgIf
  ],
  templateUrl: './hangman-game.component.html',
  styleUrl: './hangman-game.component.scss'
})
export class HangmanGameComponent implements OnInit {
  words: string[] = ['angular', 'typescript', 'component', 'service', 'module'];
  secretWord: string;
  displayedWord: string[];
  attemptsLeft: number;
  guessedLetters: string[] = [];
  gameOver: boolean;
  won: boolean;

  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void {
    this.secretWord =
      this.words[Math.floor(Math.random() * this.words.length)];
    this.displayedWord = Array(this.secretWord.length).fill('_');
    this.attemptsLeft = 6;
    this.guessedLetters = [];
    this.gameOver = false;
    this.won = false;
  }

  guessLetter(letter: string): void {
    if (this.gameOver || this.guessedLetters.includes(letter)) {
      return;
    }

    this.guessedLetters.push(letter);

    if (this.secretWord.includes(letter)) {
      for (let i = 0; i < this.secretWord.length; i++) {
        if (this.secretWord[i] === letter) {
          this.displayedWord[i] = letter;
        }
      }

      if (!this.displayedWord.includes('_')) {
        this.gameOver = true;
        this.won = true;
      }
    } else {
      this.attemptsLeft--;

      if (this.attemptsLeft === 0) {
        this.gameOver = true;
      }
    }
  }

  get alphabet(): string[] {
    return 'abcdefghijklmnopqrstuvwxyz'.split('');
  }
}
