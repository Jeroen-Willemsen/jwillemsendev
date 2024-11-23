import {Component} from '@angular/core';
import {DevelopmentExperienceComponent} from '../programming/development-experience/development-experience.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    DevelopmentExperienceComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
