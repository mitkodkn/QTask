import { Component, OnInit } from '@angular/core';
import { User } from './../../models/user';
import { AuthenticationService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: User;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.model = new User('', '');
  }

  add(): void {
    this.authService.register(this.model);
  }
}
