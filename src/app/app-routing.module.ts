import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminGuard } from './login/admin.guard';
import { AuthGuard } from './login/auth.guard';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: "", component: ProjectsComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "contact", component: ContactComponent, canActivate: [AuthGuard] },
  { path: "about", component: AboutComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
