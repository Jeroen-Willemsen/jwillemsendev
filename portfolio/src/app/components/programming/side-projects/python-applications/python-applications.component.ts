import {Component} from '@angular/core';
import {SimpleCalculatorComponent} from './simple-calculator/simple-calculator.component';
import {SimpleDutchWeatherAppComponent} from './simple-dutch-weather-app/simple-dutch-weather-app.component';
import {IpaPickerLatexConverterComponent} from './ipa-picker-latex-converter/ipa-picker-latex-converter.component';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-python-applications',
  standalone: true,
  imports: [
    IpaPickerLatexConverterComponent,
    SimpleCalculatorComponent,
    SimpleDutchWeatherAppComponent,
  ],
  templateUrl: './python-applications.component.html',
  styleUrl: '../../../../app.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease-in', style({opacity: 1}))
      ])
    ])
  ]
})
export class PythonApplicationsComponent {
  selectedTab: string = 'app-ipa-picker-latex-converter';

  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }
}
