import { Component } from '@angular/core';
import {PublicationListComponent} from '../publication-list/publication-list.component';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [
    PublicationListComponent
  ],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.scss'
})
export class PublicationsComponent {

}
