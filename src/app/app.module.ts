import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/commons/button/button.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { MenuComponent } from './components/menu/menu.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { DatePipe } from './pipes/date-pipe.pipe';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatDialogModule} from '@angular/material/dialog';
import { BasicDialogComponent } from './components/commons/basic-dialog/basic-dialog.component';
import {TaskComponent} from './components/task/task.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TaskManagerComponent,
    TaskComponent,
    MenuComponent,
    DatePipe,
    BasicDialogComponent,
    LoginComponent,
  ],
  imports: [
    MatSnackBarModule,
    DragDropModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
