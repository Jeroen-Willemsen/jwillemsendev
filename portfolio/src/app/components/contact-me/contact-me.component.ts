import {Component} from '@angular/core';
import {HighlightModule} from 'ngx-highlightjs';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [
    HighlightModule
  ],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  pythonCode: string = `
def greet(name):
    print(f"Hello, {name}!")

if __name__ == "__main__":
    user_name = input("Enter your name: ")
    greet(user_name)
  `;
}
