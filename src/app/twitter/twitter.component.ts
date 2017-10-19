import { Component } from '@angular/core';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  // styleUrls: ['./twitter.component.css'],
  styles: [`
    .textColor {
      color: blue
    }
  `]
})

export class TwitterComponent {
  maxLength = 140;
  monTextArea = 'Bonjour';
  txt = "";
  changeColor = ""

}
