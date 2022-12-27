import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AdminAboutComponent } from './about/admin-about.component';
import { AdminProjectsComponent } from './projects/admin-projects.component';
import { AdminTagsComponent } from './projects/tags/admin-tags.component';
import { AdminProjectsNewComponent } from './projects/new/admin-projects-new.component';

const routes: Routes = [
  { path: "about", component: AdminAboutComponent },
  { path: "projects", component: AdminProjectsComponent },
  { path: "projects/new", component: AdminProjectsNewComponent },
  { path: "projects/tags", component: AdminTagsComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
