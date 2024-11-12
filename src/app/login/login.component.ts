import { Component } from '@angular/core';
import { AuthenticationLayoutComponent } from "../layouts/authentication-layout/authentication-layout.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthenticationLayoutComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
