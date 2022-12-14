import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import User from '../user';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  links = [
    { path: '/', title: 'Projects', icon: 'apps'},
    { path: '/about', title: 'About Me', icon: 'info'},
    { path: '/contact', title: 'Contact Me', icon: 'contacts'},
  ]
  user: User | null = null;

  activeLink = "/";

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.userSubject.subscribe((newUser) => {
      this.user = newUser
    });
    this.router.events
    .subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.activeLink = val.url
      }
    })
  }

  onSignOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
