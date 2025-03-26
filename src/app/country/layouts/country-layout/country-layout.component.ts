import { Component } from '@angular/core';
import { TopMenuComponent } from "../../components/top-menu/top-menu.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-country-layout',
  imports: [TopMenuComponent, RouterOutlet],
  templateUrl: './country-layout.component.html',
})
export class CountryLayoutComponent {

}
