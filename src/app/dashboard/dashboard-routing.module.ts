import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskManagerComponent} from '../containers/task-manager/task-manager.component';

const routes: Routes = [{ path: '', component: TaskManagerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
