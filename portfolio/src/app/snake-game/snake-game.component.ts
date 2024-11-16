import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-snake-game',
  standalone: true,
  imports: [],
  templateUrl: './snake-game.component.html',
  styleUrl: './snake-game.component.scss'
})
export class SnakeGameComponent implements OnInit {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  box: number = 20;
  snake: { x: number; y: number }[] = [];
  direction: string = 'RIGHT';
  food: { x: number; y: number };
  gameInterval: any;
  score: number = 0;
  canvasWidth: number = 400;
  canvasHeight: number = 400;

  constructor() {}

  ngOnInit(): void {
    this.initGame();
  }

  ngAfterViewInit(): void {
    this.canvas = <HTMLCanvasElement>document.getElementById('gameCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.gameInterval = setInterval(() => this.gameLoop(), 100);
  }

  initGame(): void {
    this.snake = [{ x: 9 * this.box, y: 10 * this.box }];
    this.direction = 'RIGHT';
    this.generateFood();
    this.score = 0;
  }

  generateFood(): void {
    this.food = {
      x: Math.floor(Math.random() * (this.canvasWidth / this.box)) * this.box,
      y: Math.floor(Math.random() * (this.canvasHeight / this.box)) * this.box,
    };
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    const key = event.keyCode;
    if (key === 37 && this.direction !== 'RIGHT') {
      this.direction = 'LEFT';
    } else if (key === 38 && this.direction !== 'DOWN') {
      this.direction = 'UP';
    } else if (key === 39 && this.direction !== 'LEFT') {
      this.direction = 'RIGHT';
    } else if (key === 40 && this.direction !== 'UP') {
      this.direction = 'DOWN';
    }
  }

  gameLoop(): void {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    for (let i = 0; i < this.snake.length; i++) {
      this.ctx.fillStyle = i === 0 ? 'green' : 'lightgreen';
      this.ctx.fillRect(
        this.snake[i].x,
        this.snake[i].y,
        this.box,
        this.box
      );
    }

    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.food.x, this.food.y, this.box, this.box);

    let snakeX = this.snake[0].x;
    let snakeY = this.snake[0].y;

    if (this.direction === 'LEFT') snakeX -= this.box;
    if (this.direction === 'UP') snakeY -= this.box;
    if (this.direction === 'RIGHT') snakeX += this.box;
    if (this.direction === 'DOWN') snakeY += this.box;

    // Check collision with walls
    if (
      snakeX < 0 ||
      snakeY < 0 ||
      snakeX >= this.canvasWidth ||
      snakeY >= this.canvasHeight ||
      this.collision({ x: snakeX, y: snakeY }, this.snake)
    ) {
      clearInterval(this.gameInterval);
      alert('Game Over!');
      this.initGame();
      return;
    }

    let newHead = { x: snakeX, y: snakeY };

    // Check if snake eats food
    if (snakeX === this.food.x && snakeY === this.food.y) {
      this.score++;
      this.generateFood();
    } else {
      this.snake.pop();
    }

    this.snake.unshift(newHead);
  }

  collision(head: { x: number; y: number }, array: any[]): boolean {
    for (let i = 0; i < array.length; i++) {
      if (head.x === array[i].x && head.y === array[i].y) {
        return true;
      }
    }
    return false;
  }
}
