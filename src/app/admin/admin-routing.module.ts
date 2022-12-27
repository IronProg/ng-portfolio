import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AdminAboutComponent } from './about/admin-about.component';
import { AdminProjectsComponent } from './projects/admin-projects.component';
import { AdminTagsComponent } from './projects/tags/admin-tags.component';
import { AdminProjectsEditComponent } from './projects/edit/admin-projects-edit.component';

const routes: Routes = [
  { path: "about", component: AdminAboutComponent },
  { path: "projects", component: AdminProjectsComponent },
  { path: "projects/edit/:projectId", component: AdminProjectsEditComponent },
  { path: "projects/tags", component: AdminTagsComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
