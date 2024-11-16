import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Document} from '../models/document.model';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private documents: Document[] = [
    {
      id: 1,
      name: 'Document 1',
      description: 'Description of Document 1',
      url: 'assets/documents/document1.pdf',
    },
    {
      id: 2,
      name: 'Document 2',
      description: 'Description of Document 2',
      url: 'assets/documents/document2.pdf',
    },
  ];

  constructor() {
  }

  getDocuments(): Observable<Document[]> {
    return of(this.documents);
  }
}
