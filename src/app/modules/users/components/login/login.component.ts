import { NgClass } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  providers: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnDestroy, OnInit {
  loginForm = new FormGroup({
    email: new FormControl('test1@email.com', [Validators.required, Validators.email]),
    password: new FormControl('password', [Validators.required]),
  });

  userToken: BehaviorSubject<string> = this.userService.userToken;
  userTokenSub: Subscription;

  formError = '';

  constructor(private userService: UserService, private router: Router) {
    this.userTokenSub = this.userToken.subscribe((token) => {
      if (token) {
        router.navigate(['/']);
      }
    });
  }
  ngOnInit(): void {
    if (this.userToken.value) {
      this.router.navigate(['/']);
    }
  }

  // TODO: Handle checking if token already exists in local storage and that it is current

  loginHandler() {
    const { email, password } = this.loginForm.value;

    if (this.loginForm.valid && email && password) {
      this.userService.Login(email, password).subscribe({
        next: (res) => {
          this.formError = '';
          // TODO: Handle page direction
          console.log(res);
        },
        error: (err) => {
          this.formError = err;
        },
      });
    }
  }

  ngOnDestroy(): void {
    this.userTokenSub.unsubscribe();
  }
}
