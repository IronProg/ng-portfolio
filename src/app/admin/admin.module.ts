import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminAboutComponent } from './about/admin-about.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminProjectsComponent } from './projects/admin-projects.component';
import { AdminTagsComponent } from './projects/tags/admin-tags.component';
import { AdminProjectsEditComponent } from './projects/edit/admin-projects-edit.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AdminProjectsComponent,
    AdminProjectsEditComponent,
    AdminTagsComponent,
    AdminAboutComponent,
  ],
  imports: [SharedModule, AdminRoutingModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule, MatChipsModule, MatOptionModule, MatSelectModule],
  exports: [],
})
export class AdminModule {}
