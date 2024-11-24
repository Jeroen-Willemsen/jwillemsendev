import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {PopularScienceArticleService} from '../../../services/popular-science-article.service';
import {PopularScienceArticle} from '../../../models/popular-science.article';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-popular-science',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './popular-science.component.html',
  styleUrl: './popular-science.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease-in', style({opacity: 1}))
      ])
    ])
  ]
})
export class PopularScienceComponent implements OnInit {
  articles: PopularScienceArticle[];
  popsciAll: PopularScienceArticle[];
  popsciNL: PopularScienceArticle[];
  popsciEN: PopularScienceArticle[];
  popsciDK: PopularScienceArticle[];
  blogAll: PopularScienceArticle[];
  blogNL: PopularScienceArticle[];
  blogEN: PopularScienceArticle[];
  blogDK: PopularScienceArticle[];

  constructor(private popularScienceArticleService: PopularScienceArticleService) {}

  ngOnInit(): void {
    this.popularScienceArticleService.getOverview()
      .subscribe((docs) => {
        this.articles = docs
          .sort((a, b) => b.year - a.year);
        this.popsciAll = this.articles.filter(article => article.type === "pop-sci");
        this.blogAll = this.articles.filter(article => article.type === "blog");
        this.popsciNL = this.popsciAll.filter(article => article.language === "Dutch");
        this.popsciEN = this.popsciAll.filter(article => article.language === "English");
        this.popsciDK = this.popsciAll.filter(article => article.language === "Danish");
        this.blogNL = this.blogAll.filter(article => article.language === "Dutch");
        this.blogEN = this.blogAll.filter(article => article.language === "English");
        this.blogDK = this.blogAll.filter(article => article.language === "Danish");
      });
  }
}
