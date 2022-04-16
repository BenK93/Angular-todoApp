import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonComponent} from './components/commons/button/button.component';
import {TaskManagerComponent} from './components/task-manager/task-manager.component';
import {MenuComponent} from './components/menu/menu.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {DatePipe} from './pipes/date-pipe.pipe';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import {BasicDialogComponent} from './components/commons/basic-dialog/basic-dialog.component';
import {TaskComponent} from './components/task/task.component';
import {LoginComponent} from './components/login/login.component';


import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';

const config = {
  apiKey: 'AIzaSyDtTsmB2bLT8KmUNPw_hp414kA2nGXk6Uo',
  authDomain: 'todoapp-d1156.firebaseapp.com',
  projectId: 'todoapp-d1156',
  storageBucket: 'todoapp-d1156.appspot.com',
  messagingSenderId: '936474030031',
  appId: '1:936474030031:web:1b8a0009b38d59132aecba'
};

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
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
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
export class AppModule {
}
