import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  interpolation: ['$', '$'],
  preserveWhitespaces: true
})
export class AppComponent {

  name = 'Terminator';

  changeBg() {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark')
    } else {
      document.body.classList.add('dark')
    }
  }
}
