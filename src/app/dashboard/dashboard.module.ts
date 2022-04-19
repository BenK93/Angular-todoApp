import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {AppModule} from '../app.module';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
  ],
  imports: [
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
