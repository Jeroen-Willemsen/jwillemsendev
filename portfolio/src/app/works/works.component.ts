import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
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
