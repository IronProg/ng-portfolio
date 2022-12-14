import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.authService.userSubject.pipe(
        take(1),
        map((user) => {
          const isAdmin = user?.id === "e1asEiZYVcQZYELF1T6fDIsgGuC3";
          if (!!isAdmin) {
            return true;
          }
          return this.router.createUrlTree(["/"]);
        })
      );
  }

}
