import { Component } from '@angular/core';
import {DocumentListComponent} from '../../document-list/document-list.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [DocumentListComponent],
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent {
  projects = [
    {
      title: 'Project A',
      description: 'Description of Project A.',
      image: 'assets/images/project-a.jpg',
    },
    {
      title: 'Project B',
      description: 'Description of Project B.',
      image: 'assets/images/project-b.jpg',
    },
    // Add more projects as needed
  ];
}
