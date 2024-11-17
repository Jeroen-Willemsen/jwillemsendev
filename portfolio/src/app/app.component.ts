import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {PublicationListComponent} from './components/linguistics/publication-list/publication-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PublicationListComponent,
    FooterComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
