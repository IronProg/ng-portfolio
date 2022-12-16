import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;

  hidePassword: boolean = true;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private authService: AuthService, private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit() {

  }

  onSubmit() {
    const { email, password } = this.loginForm.value;

    if (email == null || password == null || !this.loginForm.valid) {
      return;
    }

    this.isLoading = true;
    this.authService.login(email, password)
      .subscribe(
        authResponse => {
          // Apply JWT Token
          this.router.navigate(["/"]);
        },
        errorMessage => {
          this._snackBar.open(errorMessage, 'confirm', {
            duration: 3000
          });
        },
        () => {
          this.isLoading = false;
        }
      )
  }
  onAnonymousLogin() {
    this.isLoading = true;
    this.authService.anonymousLogin()
      .subscribe(
        authResponse => {
          // Apply JWT Token
          this.router.navigate(["/"]);
        },
        errorMessage => {
          this._snackBar.open(errorMessage, 'confirm', {
            duration: 3000
          });
        },
        () => {
          this.isLoading = false;
        }
      )
  }
}
