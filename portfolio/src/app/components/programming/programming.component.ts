import {Component} from '@angular/core';
import {NgIf} from '@angular/common';
import {DevelopmentSkillsComponent} from './development-skills/development-skills.component';
import {SideProjectsComponent} from './side-projects/side-projects.component';
import {PopularScienceComponent} from '../linguistics/popular-science/popular-science.component';
import {PublicationsComponent} from '../linguistics/publications/publications.component';
import {TheRetaLanguageComponent} from '../linguistics/the-reta-language/the-reta-language.component';

@Component({
  selector: 'app-programming',
  standalone: true,
  imports: [
    DevelopmentSkillsComponent,
    NgIf,
    SideProjectsComponent,
    PopularScienceComponent,
    PublicationsComponent,
    TheRetaLanguageComponent
  ],
  templateUrl: './programming.component.html',
  styleUrl: '../../app.component.scss'
})
export class ProgrammingComponent {
  selectedTab: string = 'app-development-skills';

  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }
}
