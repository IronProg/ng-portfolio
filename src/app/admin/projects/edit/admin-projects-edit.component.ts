import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-projects-edit',
  templateUrl: './admin-projects-edit.component.html',
  styleUrls: ['./admin-projects-edit.component.css']
})
export class AdminProjectsEditComponent implements OnInit, OnDestroy {
  id: string | null = null;
  routeSubscription = new Subscription();

  projectForm = new FormGroup({
    "title": new FormControl("", Validators.required),
    "description": new FormControl("", Validators.required),
    "imageUrl": new FormControl("", [Validators.pattern(/^https:\/\/\w/), Validators.required]),
    "codeUrl": new FormControl("", Validators.pattern(/^https:\/\/\w/)),
    "viewUrl": new FormControl("", Validators.pattern(/^https:\/\/\w/)),
    "tags": new FormControl("", Validators.required),
  })

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe({
      next: param => {
        const nextId = param.get("projectId");
        if (nextId) {
          this.id = nextId;
        }
      }
    })
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  newProject() {
    if (!this.projectForm.valid) {
      return;
    }

    const form = this.projectForm.value;

    console.log(form);
  }
}
