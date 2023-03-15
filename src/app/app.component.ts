import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dataLoaded = false;
  title = 'northwind';
  user: string = 'Engin Demiroğ';

}
