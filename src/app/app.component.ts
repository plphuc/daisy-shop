import { Component } from '@angular/core';
import { HeaderComponent } from "./layouts/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent]
})
export class AppComponent {
  title = 'daisy-shop';
}
