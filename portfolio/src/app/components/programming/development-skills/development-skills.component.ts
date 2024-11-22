import {Component, OnInit} from '@angular/core';
import {CommonModule, NgForOf, NgIf} from '@angular/common';
import {DevelopmentSkillsService} from '../../../services/development-skills.service';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import {SkillCategory} from '../../../models/skill.model';

@Component({
  selector: 'app-development-skills',
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
  templateUrl: './development-skills.component.html',
  styleUrl: '../../../app.component.scss'
})
export class DevelopmentSkillsComponent implements OnInit {
  categories: SkillCategory[] = [];

  constructor(private developmentSkillsService: DevelopmentSkillsService) {}

  ngOnInit(): void {
    this.developmentSkillsService.getSkillCategories()
      .subscribe((skills) => {
        this.categories = skills;
      });
  }
}
