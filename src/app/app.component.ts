import { Component } from '@angular/core';
import { VacaccinesPanel } from './panel/panel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vacunas';

  vacaccines1: Array<VacaccinesPanel> = [
    { name: "H1N1", date: new Date() },
    { name: "Rotavirus", date: new Date() },
    { name: "VIH", date: new Date() },
  ]
  vacaccines2: Array<VacaccinesPanel> = [
    { name: "Neumococo", date: new Date() },
    { name: "BCG", date: new Date() }
  ]
  vacaccines3: Array<VacaccinesPanel> = [
    { name: "Influenza", date: new Date() },
    { name: "Pentavalente", date: new Date() }
  ]
}
