import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserByIdComponent } from './user-by-id.component';
import { InsideGuard } from '../../inside.guard';

const routes: Routes = [
  {
    path: '',
    component: UserByIdComponent,
    canActivate: [InsideGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [InsideGuard]
})
export class UserByIdRoutingModule { }
