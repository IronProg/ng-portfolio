import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  hidePassword: boolean = true;

  userSubject = new Subscription();

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userSubject = this.authService.userSubject.subscribe({
      next: (userNext) => {
        if (!!userNext) {
          this.router.navigate(['/'])
        }
      }
    })
  }

  ngOnDestroy(): void {
    this.userSubject.unsubscribe();
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;

    if (email == null || password == null || !this.loginForm.valid) {
      return;
    }

    this.authService.login(email, password);
  }

  onAnonymousLogin() {
    this.authService.anonymousLogin();
  }
}
