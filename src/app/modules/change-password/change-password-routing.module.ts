import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './change-password.component';
import { OutsideGuard } from '../../outside.guard';

const routes: Routes = [
  {
    path: '',
    component: ChangePasswordComponent,
    canActivate: [OutsideGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [OutsideGuard]
})
export class ChangePasswordRoutingModule { }
