import {Component} from '@angular/core';
import {GamesComponent} from './games/games.component';
import {PythonApplicationsComponent} from './python-applications/python-applications.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-side-projects',
  standalone: true,
  imports: [
    GamesComponent,
    NgIf,
    PythonApplicationsComponent
  ],
  templateUrl: './side-projects.component.html',
  styleUrl: '../../../app.component.scss'
})
export class SideProjectsComponent {
  selectedTab: string = 'app-games';

  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }
}
