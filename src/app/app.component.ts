import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Beranda', url: 'home', icon: 'home' },
{ title: 'Data Mobil', url: '/datamobil', icon: 'car' },
  ];
  public labels = [];
  constructor() {}
}