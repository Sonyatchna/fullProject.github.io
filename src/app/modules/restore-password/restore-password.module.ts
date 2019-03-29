import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestorePasswordRoutingModule } from './restore-password-routing.module';
import { RestorePasswordComponent } from './restore-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RestorePasswordComponent
  ],
  imports: [
    CommonModule,
    RestorePasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RestorePasswordModule { }
