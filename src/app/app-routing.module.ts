import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './modules/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: './modules/register/register.module#RegisterModule'
  },
  {
    path: 'users',
    loadChildren: './modules/users/users.module#UsersModule'
  },
  {
    path: 'users/:id',
    loadChildren: './modules/user-by-id/user-by-id.module#UserByIdModule'
  },
  {
    path: 'restore-password',
    loadChildren: './modules/restore-password/restore-password.module#RestorePasswordModule'
  },
  {
    path: 'change-password/:token',
    loadChildren: './modules/change-password/change-password.module#ChangePasswordModule'
  },
  {
    path: '**',
    loadChildren: './modules/not-found/not-found.module#NotFoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
