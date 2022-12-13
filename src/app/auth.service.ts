import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import User from "./user";

@Injectable({providedIn: 'root'})
export class AuthService {
  private user: User | null = null;

  userSubject = new Subject<User | null>();

  login() {
    this.user = {
      username: "IronProg",
      imageUrl: "https://avatars.githubusercontent.com/u/61606251?v=4"
    };
    this.userSubject.next(this.user);
  }

  logout() {
    this.user = null;
    this.userSubject.next(this.user);
  }
}
