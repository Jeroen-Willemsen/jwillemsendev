import { Component } from '@angular/core';
import {PopularScienceArticle} from '../../../models/popular-science.article';
import {PopularScienceArticleService} from '../../../services/popular-science-article.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-popular-science',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './popular-science.component.html',
  styleUrl: './popular-science.component.scss'
})
export class PopularScienceComponent {
  articles: PopularScienceArticle[]

  constructor(private popularScienceArticleService: PopularScienceArticleService) {}

  ngOnInit(): void {
    this.popularScienceArticleService.getOverview()
      .subscribe((docs) => {
        this.articles = docs
          .sort((a, b) => a.year - b.year)
          .reverse();
        // Custom Sorting Logic: If you need more complex sorting (e.g., sorting by multiple properties),
        // you can extend the comparator function accordingly.
        //  const sortedByYearThenName = [...entities].sort((a, b) => {
        //   if (a.year !== b.year) {
        //     return a.year - b.year;
        //   }
        //   return a.name.localeCompare(b.name);
        // });
      });
  }
}
