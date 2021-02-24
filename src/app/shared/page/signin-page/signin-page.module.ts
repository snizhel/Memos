import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninPageRoutingModule } from './signin-page-routing.module';
import { SigninPageComponent } from './signin-page.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth'
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [SigninPageComponent],
  imports: [
    CommonModule,
    SigninPageRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ]
})
export class SigninPageModule { }
