import {Component, OnInit} from '@angular/core';
import {CommonModule, NgForOf, NgIf} from '@angular/common';
import {DevelopmentExperienceService} from '../../../services/development-experience.service';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import {DevelopmentExperienceCategory} from '../../../models/development-experience.model';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-development-experience',
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatExpansionPanel,
    MatExpansionPanelDescription,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    NgForOf,
    NgIf,
  ],
  templateUrl: './development-experience.component.html',
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
export class DevelopmentExperienceComponent implements OnInit {
  protected developmentExperienceCategories: DevelopmentExperienceCategory[] = [];
  protected panelsVisible: boolean = false;

  constructor(private developmentExperienceService: DevelopmentExperienceService) {
  }

  ngOnInit(): void {
    this.developmentExperienceService.getExperienceCategories()
      .subscribe((experiences) => {
        this.developmentExperienceCategories = experiences;
        setTimeout(() => {
          this.panelsVisible = true;
        }, 50)
      });
  }
}
