import {Component, OnInit} from '@angular/core';
import {PublicationService} from '../../../services/publication.service';
import {Publication} from '../../../models/publication.model';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.scss'
})
export class PublicationsComponent implements OnInit {
  publications: Publication[] = [];

  constructor(private publicationService: PublicationService) {
  }

  ngOnInit(): void {
    this.publicationService.getPublications()
      .subscribe((docs) => {
        this.publications = docs
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
