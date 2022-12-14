import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  languages = [
    { name: 'Javascript', svgPath: 'assets/svg/js.svg', time: '1 year' },
    {
      name: 'Typescript',
      svgPath: 'assets/svg/ts.svg',
      time: 'Less than 1 year',
    },
    { name: 'C Sharp', svgPath: 'assets/svg/cs.svg', time: '1 year' },
    { name: 'HTML5', svgPath: 'assets/svg/html.svg', time: '1 year' },
    { name: 'CSS3', svgPath: 'assets/svg/css.svg', time: '1 year' },
  ];
  technologies = [
    { name: 'JQuery / AJAX', svgPath: 'assets/svg/jquery.svg', time: '1 year' },
    {
      name: 'ReactJS',
      svgPath: 'assets/svg/react.svg',
      time: 'Less than 1 year',
    },
    {
      name: 'NextJS',
      svgPath: 'assets/svg/nextjs.svg',
      time: 'Less than 1 year',
    },
    {
      name: 'Angular 2+',
      svgPath: 'assets/svg/angular.svg',
      time: 'Less than 1 year',
    },
    { name: 'Bootstrap 3,4,5', svgPath: 'assets/svg/bs.svg', time: '1 year' },
    {
      name: 'TailwindCSS',
      svgPath: 'assets/svg/tailwind.svg',
      time: 'Less than 1 year',
    },
    { name: '.NET', svgPath: 'assets/svg/dotnet.svg', time: '1 year' },
    { name: 'ASP.NET', svgPath: 'assets/svg/asp.svg', time: '1 year' },
    {
      name: 'GitLab',
      svgPath: 'assets/svg/gitlab.svg',
      time: 'Less than 1 year',
    },
    { name: 'GitHub', svgPath: 'assets/svg/github.svg', time: '1 year' },
  ];
  courses = [
    {
      title: 'Responsive Web Design',
      description:
        "I already knew HTML and CSS when I first saw this course, but it was really helpful to make all these practical exercises and have some simple projects to my portfolio - Finished",
      creator: 'FreeCodeCamp',
      creatorUrl: 'https://www.freecodecamp.org/',
      certificateUrl: 'https://www.freecodecamp.org/certification/ironprog/responsive-web-design'
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      description:
        "Nothing better to a newbie programmer than to practice heavy logic, so i thought of sharpening my skills at logic and javascript, a course strongly based on practice - Finished",
      creator: 'FreeCodeCamp',
      creatorUrl: 'https://www.freecodecamp.org/',
      certificateUrl: 'https://www.freecodecamp.org/certification/ironprog/javascript-algorithms-and-data-structures'
    },
    {
      title: 'Front End Development Libraries',
      description:
        "This was the course that introduced me to some amazing libraries, like Bootstrap, JQuery and React, which made me feel ",
      creator: 'FreeCodeCamp',
      creatorUrl: 'https://www.freecodecamp.org/',
      certificateUrl: 'https://www.freecodecamp.org/certification/ironprog/front-end-development-libraries'
    },
    {
      title: 'React - The Complete Guide',
      description:
        'In this course I learned how to work with React, using functional components and various hooks, including my own custom ones. - Finished',
      creator: 'AcadeMind',
      creatorUrl: 'https://academind.com/',
      certificateUrl: 'https://www.udemy.com/certificate/UC-8b586b92-1869-4b8e-a48f-d0d4c2957339/'
    },
    {
      title: 'NextJS - The Practical Guide',
      description:
        "In this course I've evolved my skills in React, along with learning NextJS, using React + NodeJS to make some amazing Full Stack Applications using only Javascript - Finished",
      creator: 'AcadeMind',
      creatorUrl: 'https://academind.com/',
      certificateUrl: 'https://www.udemy.com/certificate/UC-efa89517-4ee6-428e-a0ad-1a0b4a948346/'
    },
    {
      title: 'Angular - The Complete Guide',
      description:
        "Here is where I had contact with angular for the first time, and I found it amazing, concise and powerful - In Progress",
      creator: 'AcadeMind',
      creatorUrl: 'https://academind.com/',
      certificateUrl: ''
    },
    {
      title: 'NodeJS - The Complete Guide',
      description:
        "I've been, slowly, adapting my skills in ASP.NET to NodeJS to unbind my MVC, APIs and BackEnd knowledge from C# - In Progress",
      creator: 'AcadeMind',
      creatorUrl: 'https://academind.com/',
      certificateUrl: ''
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
