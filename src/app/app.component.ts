import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PersWeb';
  dark = true;

  toggleTheme() {
    this.dark = !this.dark;
  }
}
