import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Subject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../user.model';

interface IAuthSend {
  email?: string;
  password?: string;
  returnSecureToken: boolean;
}

interface IAuthReturn {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private signInUrl: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`;
  private anonymousSignInUrl: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`;
  private user: User | null = null;

  userSubject = new BehaviorSubject<User | null>(null);

  constructor(
    private readonly http: HttpClient,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  login(email: string, password: string) {
    let loginData: IAuthSend = {
      email,
      password,
      returnSecureToken: true,
    };

    return this.http
      .post<IAuthReturn>(this.signInUrl, loginData)
      .pipe(catchError(this.handleError))
      .subscribe({
        next: (authResponse) => {
          let expirationDate = new Date(
            new Date().getTime() + +authResponse.expiresIn * 1000
          );

          let nextUser = new User(
            authResponse.email,
            authResponse.localId,
            authResponse.idToken,
            expirationDate,
            authResponse.refreshToken
          );

          this.userSubject.next(nextUser);

          this.showAuthenticatedSnackBar();
        },
      });
  }

  anonymousLogin() {
    let loginData: IAuthSend = {
      returnSecureToken: true,
    };

    return this.http
      .post<IAuthReturn>(this.anonymousSignInUrl, loginData)
      .pipe(catchError(this.handleError))
      .subscribe({
        next: (authResponse) => {
          let expirationDate = new Date(
            new Date().getTime() + +authResponse.expiresIn * 1000
          );

          let nextUser = new User(
            null,
            authResponse.localId,
            authResponse.idToken,
            expirationDate,
            authResponse.refreshToken
          );

          this.userSubject.next(nextUser);

          this.showAuthenticatedSnackBar();
        },
        error: (errorMessage) => {
          this._snackBar.open(errorMessage, 'confirm', {
            duration: 3000,
          });
        },
      });
  }

  logout() {
    this.user = null;
    this.userSubject.next(this.user);
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An unknown error ocurred';
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists!';
        break;
      case 'EMAIL_NOT_FOUND':
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid Credentials.';
        break;
      case 'USER_DISABLED':
        errorMessage = 'This user is disabled.';
        break;
    }
    return throwError(errorMessage);
  }

  private showAuthenticatedSnackBar(): void{
    this._snackBar.open('Authenticated', '', {
      duration: 3000,
    });
  }
}
