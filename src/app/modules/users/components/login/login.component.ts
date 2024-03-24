import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  providers: [UserService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  formError = '';

  constructor(private userService: UserService) {}

  // TODO: Handle checking if token already exists in local storage and that it is current

  loginHandler() {
    const { email, password } = this.loginForm.value;

    if (this.loginForm.valid && email && password) {
      this.userService.Login(email, password).subscribe({
        next: (res) => {
          // TODO: Handle page direction
          console.log(res);
        },
        error: (err) => {
          this.formError = err;
        },
      });
    }
  }
}
