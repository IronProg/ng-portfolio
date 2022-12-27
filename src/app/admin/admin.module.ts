import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminAboutComponent } from './about/admin-about.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminProjectsComponent } from './projects/admin-projects.component';
import { AdminTagsComponent } from './projects/tags/admin-tags.component';
import { AdminProjectsNewComponent } from './projects/new/admin-projects-new.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AdminProjectsComponent,
    AdminProjectsNewComponent,
    AdminTagsComponent,
    AdminAboutComponent,
  ],
  imports: [SharedModule, AdminRoutingModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  exports: [],
})
export class AdminModule {}
