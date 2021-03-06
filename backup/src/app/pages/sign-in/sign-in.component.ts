import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private authSer: AuthService) { }


  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }

  login() {
    this.authSer.login();
  }

  signOut() {
    this.authSer.signOut();
  }

}
