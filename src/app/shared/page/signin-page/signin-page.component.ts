import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})

export class SigninPageComponent implements OnInit {

  constructor(private auth: AngularFireAuth, public auth1: AuthService) {

  }

  ngOnInit(): void {
    this.auth.authState.subscribe((auth) => {
      if (auth) {
        this.user = auth;
      }
    });
  }

  public user: any;

  async login() {
    const provider = new firebase.default.auth.GoogleAuthProvider();
    try {
      await this.auth.signInWithPopup(provider);
      alert("login successfully");
    }
    catch (err) {
      alert("login failed");
    }
  }

  async signOut() {
    try {
      await this.auth.signOut();
      alert("Signed out")
    }
    catch (err) {
      alert("Can't sign out")

    }
  }
}