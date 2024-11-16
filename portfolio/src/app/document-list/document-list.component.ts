import {Component, OnInit} from '@angular/core';
import {DocumentService} from '../services/document.service';
import {Document} from '../models/document.model';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-document-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss'],
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = [];

  constructor(private documentService: DocumentService) {
  }

  ngOnInit(): void {
    this.documentService.getDocuments().subscribe((docs) => {
      this.documents = docs;
    });
  }
}
