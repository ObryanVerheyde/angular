import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "c'est le title";
  name = "";
  onOffVar = "Off";

  clickMe(): void {
    this.title = "On change le title avec la function";
  }

  updateName(event: Event): void {
    let element = <HTMLInputElement> event.target;
    // console.log(element.value);
    this.name = element.value;
  }

  onOff() {
    if (this.onOffVar == "Off") {
      this.onOffVar = "On";
    } else {
      this.onOffVar = 'Off';
    }

  }
}
