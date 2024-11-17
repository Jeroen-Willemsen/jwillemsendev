import { Component } from '@angular/core';
import {DocumentListComponent} from '../document-list/document-list.component';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [
    DocumentListComponent
  ],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.scss'
})
export class PublicationsComponent {

}
