import { Component } from '@angular/core';
import { AuthenticationLayoutComponent } from "../layouts/authentication-layout/authentication-layout.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [AuthenticationLayoutComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
