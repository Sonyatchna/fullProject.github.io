import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { OutsideGuard } from '../../outside.guard';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    canActivate: [OutsideGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [OutsideGuard]
})
export class RegisterRoutingModule { }
