import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})

export class SigninPageComponent implements OnInit {

  constructor(private auth: AngularFireAuth) { }
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
  ngOnInit(): void {
  }

}
