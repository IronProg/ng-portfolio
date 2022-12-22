import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  catchError,
  exhaustMap,
  map,
  pipe,
  Subject,
  take,
  throwError,
} from 'rxjs';
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

interface IRefreshTokenReturn {
  idToken: string,
  refreshToken: string,
  expiresIn: string
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private signInUrl: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`;
  private anonymousSignInUrl: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`;
  private refreshTokenUrl: string = `https://securetoken.googleapis.com/v1/token?key=${environment.firebase.apiKey}`;

  userSubject = new BehaviorSubject<User | null>(null);

  logoutTimer: ReturnType<typeof setTimeout> = setTimeout(() => {}, 0);

  constructor(
    private readonly http: HttpClient,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  autoLogin() {
    const localData: string | null = localStorage.getItem('portfolioUser');

    if (localData) {
      const user: {
        email: string | null;
        id: string;
        _token: string;
        _tokenExpirationDate: Date;
        _refreshToken: string;
      } = JSON.parse(localData);

      const expirationDate = new Date(user._tokenExpirationDate);

      if (new Date() > expirationDate) {
        this.logout();
        return;
      }

      const nextUser = new User(
        user.email,
        user.id,
        user._token,
        expirationDate,
        user._refreshToken
      );

      const newTimeToExpire = expirationDate.getTime() - new Date().getTime();

      this.autoLogout(newTimeToExpire);
      this.userSubject.next(nextUser);
    }
  }

  login(email: string, password: string) {
    let loginData: IAuthSend = {
      email,
      password,
      returnSecureToken: true,
    };

    return this.http
      .post<IAuthReturn>(this.signInUrl, loginData)
      .pipe(catchError(this.handleError.bind(this)))
      .subscribe({
        next: this.handleLogin.bind(this),
      });
  }

  anonymousLogin() {
    let loginData: IAuthSend = {
      returnSecureToken: true,
    };

    return this.http
      .post<IAuthReturn>(this.anonymousSignInUrl, loginData)
      .pipe(catchError(this.handleError.bind(this)))
      .subscribe({
        next: this.handleLogin.bind(this),
      });
  }

  logout() {
    this.userSubject.next(null);
    localStorage.removeItem('portfolioUser');
    clearTimeout(this.logoutTimer);
    this.router.navigate(['/login']);
  }

  private autoLogout(timeToLogout: number) {
    console.log('Time to logout: ' + timeToLogout);
    this.logoutTimer = setTimeout(() => {
      this.logout();
    }, timeToLogout);
  }

  private handleLogin(authResponse: IAuthReturn) {
    let expirationDate = new Date(
      new Date().getTime() + +authResponse.expiresIn * 1000
    );

    let email = !!authResponse.email ? authResponse.email : null;

    let nextUser = new User(
      email,
      authResponse.localId,
      authResponse.idToken,
      expirationDate,
      authResponse.refreshToken
    );

    localStorage.setItem('portfolioUser', JSON.stringify(nextUser));
    this.userSubject.next(nextUser);

    this.autoLogout(+authResponse.expiresIn * 1000);

    this.showAuthenticatedSnackBar();
  }

  refreshToken() {
    let prevUser: User | null = null;
    this.userSubject
      .pipe(
        take(1),
        exhaustMap((user) => {
          prevUser = user;
          return this.http.post<IRefreshTokenReturn>(this.refreshTokenUrl, {
            grant_type: 'refresh_token',
            refresh_token: user?.refreshToken,
          });
        }),
        catchError(this.handleError.bind(this))
      )
      .subscribe({
        next: (refreshResponse) => {
          let expirationDate = new Date(
            new Date().getTime() + +refreshResponse.expiresIn * 1000
          );

          let email = !!prevUser?.email ? prevUser?.email : null;

          const nextUser = new User(email, prevUser!.id, refreshResponse.idToken, expirationDate, refreshResponse.refreshToken);

          localStorage.setItem('portfolioUser', JSON.stringify(nextUser));
          this.userSubject.next(nextUser);

          this.autoLogout(+refreshResponse.expiresIn * 1000);

          this.showAuthenticatedSnackBar();
        },
      });
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
    this._snackBar.open(errorMessage, 'Confirm', {
      duration: 5000,
    });
    return throwError(errorMessage);
  }

  private showAuthenticatedSnackBar(): void {
    this._snackBar.open('Authenticated', '', {
      duration: 3000,
    });
  }
}
