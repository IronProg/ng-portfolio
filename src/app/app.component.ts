import { Component, OnInit } from '@angular/core';
import {  } from '@angular/fire/firestore';
import { AuthService } from './login/auth.service';
import { ProjectsService } from './projects/projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.authService.autoLogin()
    this.projectsService.getProjects().subscribe();
  }
}
