import {Component} from '@angular/core';
import {NgIf} from '@angular/common';
import {PopularScienceComponent} from './popular-science/popular-science.component';
import {PublicationsComponent} from './publications/publications.component';
import {TheRetaLanguageComponent} from './the-reta-language/the-reta-language.component';

@Component({
  selector: 'app-linguistics',
  standalone: true,
  imports: [
    NgIf,
    PopularScienceComponent,
    PublicationsComponent,
    TheRetaLanguageComponent
  ],
  templateUrl: './linguistics.component.html',
  styleUrls: ['./linguistics.component.scss'],
})
export class LinguisticsComponent {
  selectedTab: string = 'app-publications';
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

  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }
}
