import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoMaterialModule } from './material.module';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule }   from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RegisterSwitchComponent } from './register-switch/register-switch.component';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DataFetchingService } from './data-fetching.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterSwitchComponent,
    ErrorModalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [DataFetchingService],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*

Components:
  login
  register
  mainDisplayPage
  divCard



  Services:
  http fetching



*/