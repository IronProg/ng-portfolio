import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, take } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getProjects() {
    return this.authService.userSubject
      .pipe(take(1), exhaustMap(user => {
        return this.http
        .get('https://ng-portfolio-21225-default-rtdb.firebase.com/projects.json', {
          params: new HttpParams().append("auth", user?.token!)
        })
      }))
  }
}
