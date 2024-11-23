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
  styleUrl: '../../../app.component.scss'
})
export class DevelopmentExperienceComponent implements OnInit {
  developmentExperienceCategories: DevelopmentExperienceCategory[] = [];

  constructor(private developmentExperienceService: DevelopmentExperienceService) {}

  ngOnInit(): void {
    this.developmentExperienceService.getExperienceCategories()
      .subscribe((experiences) => {
        this.developmentExperienceCategories = experiences;
      });
  }
}
