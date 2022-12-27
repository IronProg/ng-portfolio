import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [SharedModule, ContactRoutingModule, MatCardModule],
  exports: [],
})
export class ContactModule {}
