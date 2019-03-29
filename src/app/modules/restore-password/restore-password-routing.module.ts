import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestorePasswordComponent } from './restore-password.component';
import { OutsideGuard } from '../../outside.guard';

const routes: Routes = [
  {
    path: '',
    component: RestorePasswordComponent,
    canActivate: [OutsideGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [OutsideGuard]
})
export class RestorePasswordRoutingModule { }
