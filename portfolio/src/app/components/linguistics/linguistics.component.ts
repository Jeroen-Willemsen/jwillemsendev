import {Component} from '@angular/core';
import {NgIf} from '@angular/common';
import {PopularScienceComponent} from './popular-science/popular-science.component';
import {PublicationsComponent} from './publications/publications.component';
import {TheRetaLanguageComponent} from './the-reta-language/the-reta-language.component';
import {animate, style, transition, trigger} from '@angular/animations';

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
  styleUrl: '../../app.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease-in', style({opacity: 1}))
      ])
    ])
  ]
})
export class LinguisticsComponent {
  selectedTab: string = 'app-publications';

  protected selectTab = (tabName: string): void => {
    this.selectedTab = tabName;
  };
}
