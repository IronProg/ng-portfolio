import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  languages = [
    { name: "Javascript", svgPath: "assets/svg/js.svg", time: '1 year' },
    { name: "Typescript", svgPath: "assets/svg/ts.svg", time: 'Less than 1 year' },
    { name: "C Sharp", svgPath: "assets/svg/cs.svg", time: '1 year' },
    { name: "HTML5", svgPath: "assets/svg/html.svg", time: '1 year' },
    { name: "CSS3", svgPath: "assets/svg/css.svg", time: '1 year' },
  ]
  technologies = [
    { name: "JQuery / AJAX", svgPath: "assets/svg/jquery.svg", time: '1 year' },
    { name: "ReactJS", svgPath: "assets/svg/react.svg", time: 'Less than 1 year' },
    { name: "NextJS", svgPath: "assets/svg/nextjs.svg", time: 'Less than 1 year' },
    { name: "Angular 2+", svgPath: "assets/svg/angular.svg", time: 'Less than 1 year' },
    { name: "Bootstrap 3,4,5", svgPath: "assets/svg/bs.svg", time: '1 year' },
    { name: "TailwindCSS", svgPath: "assets/svg/tailwind.svg", time: 'Less than 1 year' },
    { name: ".NET", svgPath: "assets/svg/dotnet.svg", time: '1 year' },
    { name: "ASP.NET", svgPath: "assets/svg/asp.svg", time: '1 year' },
    { name: "GitLab", svgPath: "assets/svg/gitlab.svg", time: 'Less than 1 year' },
    { name: "GitHub", svgPath: "assets/svg/github.svg", time: '1 year' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
