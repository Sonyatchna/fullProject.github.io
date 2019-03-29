import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserByIdRoutingModule } from './user-by-id-routing.module';
import { UserByIdComponent } from './user-by-id.component';

@NgModule({
  declarations: [UserByIdComponent],
  imports: [
    CommonModule,
    UserByIdRoutingModule
  ]
})
export class UserByIdModule { }
