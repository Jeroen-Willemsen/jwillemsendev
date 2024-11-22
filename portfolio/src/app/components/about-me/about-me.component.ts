import {Component} from '@angular/core';
import {DevelopmentSkillsComponent} from './development-skills/development-skills.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    DevelopmentSkillsComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
