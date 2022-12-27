import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { SharedModule } from '../shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    SharedModule,
    AboutRoutingModule,
    MatListModule,
    MatExpansionModule,
    MatSliderModule,
    MatStepperModule,
  ],
  exports: [AboutComponent],
})
export class AboutModule {}
