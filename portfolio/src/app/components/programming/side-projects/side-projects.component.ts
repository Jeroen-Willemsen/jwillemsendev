import {Component} from '@angular/core';
import {GamesComponent} from './games/games.component';
import {PythonApplicationsComponent} from './python-applications/python-applications.component';
import {NgIf} from '@angular/common';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-side-projects',
  standalone: true,
  imports: [
    GamesComponent,
    NgIf,
    PythonApplicationsComponent
  ],
  templateUrl: './side-projects.component.html',
  styleUrl: '../../../app.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease-in', style({opacity: 1}))
      ])
    ])
  ]
})
export class SideProjectsComponent {
  selectedTab: string = 'app-games';

  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }
}
