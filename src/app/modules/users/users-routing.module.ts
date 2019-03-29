import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { InsideGuard } from '../../inside.guard';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    canActivate: [InsideGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [InsideGuard]
})
export class UsersRoutingModule { }
