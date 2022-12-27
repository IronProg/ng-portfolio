import { Component, OnInit } from '@angular/core';
import { Project } from './project';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Project Title',
      description: 'This is the project description',
      imageUrl:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fprogramming-background&psig=AOvVaw1j1T5V6DFjHc7yDSPOhL2Z&ust=1670960821383000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKiB9qLs9PsCFQAAAAAdAAAAABAE',
      codeUrl: "#",
      viewUrl: "#",
      tags: ["C#", "JS", "React"]
    },
  ];
  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe();
  }
}
