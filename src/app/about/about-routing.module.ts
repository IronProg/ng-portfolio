import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../login/auth.guard";
import { AboutComponent } from "./about.component";

const routes: Routes = [
  { path: '', component: AboutComponent, canActivate: [AuthGuard] },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
