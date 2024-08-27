import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports : [ FormsModule ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user: any = {};
  credentials: any = {};

  constructor(private userService: UserService) {}

  register() {
    this.userService.register(this.user).subscribe(response => {
      console.log('User registered:', response);
    });
  }

  login() {
    this.userService.login(this.credentials).subscribe(response => {
      localStorage.setItem('token', response.token);
      console.log('User logged in:', response);
    });
  }

  logout() {
    this.userService.logout().subscribe(response => {
      localStorage.removeItem('token');
      console.log('User logged out:', response);
    });
  }
}

