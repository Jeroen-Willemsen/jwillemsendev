import {Component, OnInit} from '@angular/core';
import {PublicationService} from '../../../services/publication.service';
import {Publication} from '../../../models/publication.model';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-publication-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    NgIf
  ],
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.scss'],
})
export class PublicationListComponent implements OnInit {
  documents: Publication[] = [];

  constructor(private documentService: PublicationService) {
  }

  ngOnInit(): void {
    this.documentService.getDocuments().subscribe((docs) => {
      this.documents = docs;
    });
  }

  protected readonly window = window;
}
