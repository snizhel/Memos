import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './shared/components/main-nav/main-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component'
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { LoginComponent } from './admin/login/login.component'


const config = {
  apiKey: "AIzaSyAPUq073NCzk_Cw2ex0yIzNnHSyacb_5eo",
    authDomain: "memos-a4a21.firebaseapp.com",
    projectId: "memos-a4a21",
    storageBucket: "memos-a4a21.appspot.com",
    messagingSenderId: "425019375866",
    appId: "1:425019375866:web:b15b9b8016300549998943",
    measurementId: "G-TFK0VLYVSV"
};

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SearchBarComponent,
    LoginComponent
  ],
  imports: [
    MatDialogModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
