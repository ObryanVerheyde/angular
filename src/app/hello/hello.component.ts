import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: 'Hello {{ name }}'
})
export class HelloComponent {
  name = 'Aston';
}
