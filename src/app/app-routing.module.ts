import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskManagerComponent} from './components/task-manager/task-manager.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [],
    component: TaskManagerComponent
  },
  {
    path: 'login',
    canActivate: [],
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
