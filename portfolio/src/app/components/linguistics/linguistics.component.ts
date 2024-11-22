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
  styleUrl: '../../app.component.scss'
})
export class LinguisticsComponent {
  selectedTab: string = 'app-publications';

  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }
}
