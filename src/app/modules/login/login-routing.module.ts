import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { OutsideGuard } from '../../outside.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [OutsideGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [OutsideGuard]
})
export class LoginRoutingModule { }
