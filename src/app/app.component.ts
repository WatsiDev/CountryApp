import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./country/components/footer/footer.component";
import { TopMenuComponent } from "./country/components/top-menu/top-menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, TopMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appcountry07';
}
