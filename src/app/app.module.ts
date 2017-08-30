import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
