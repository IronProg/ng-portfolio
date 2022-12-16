import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Subject, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import User from "./user";

interface IAuthSend {
  email?: string,
  password?: string,
  returnSecureToken: boolean,
}

interface IAuthReturn {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}

@Injectable({providedIn: 'root'})
export class AuthService {
  private signInUrl: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`;
  private anonymousSignInUrl: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`;
  private user: User | null = null;

  userSubject = new Subject<User | null>();

  constructor(private readonly http: HttpClient) {}

  login(email: string, password: string) {
    let loginData: IAuthSend = {
      email,
      password,
      returnSecureToken: true
    };

    return this.http.post<IAuthReturn>(this.signInUrl, loginData)
    .pipe(catchError(this.handleError));
  }

  anonymousLogin() {
    let loginData: IAuthSend = {
      returnSecureToken: true,
    };

    return this.http.post<IAuthReturn>(this.anonymousSignInUrl, loginData)
    .pipe(catchError(this.handleError));
  }

  logout() {
    this.user = null;
    this.userSubject.next(this.user);
  }


  private handleError(errorResponse: HttpErrorResponse)  {
    console.log(errorResponse);
    let errorMessage = 'An unknown error ocurred';
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists!';
        break;
      case 'EMAIL_NOT_FOUND':
      case 'INVALID_PASSWORD':
        errorMessage = "Invalid Credentials.";
        break;
      case 'USER_DISABLED':
        errorMessage = "This user is disabled.";
        break;
    }
    return throwError(errorMessage);
  }
}
