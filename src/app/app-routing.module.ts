import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./projects/projects.module').then((mod) => mod.ProjectsModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((mod) => mod.LoginModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((mod) => mod.ContactModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((mod) => mod.AboutModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((mod) => mod.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
