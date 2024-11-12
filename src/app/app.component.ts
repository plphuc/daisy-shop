import { Component } from '@angular/core';
import { HeaderComponent } from "./layouts/header/header.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, LoginFormComponent]
})
export class AppComponent {
  title = 'daisy-shop';
}
