import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public user: firebase.default.User;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }
  async oAuthLogin() {
    await this.afAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider())
  }

  logout() {
    this.afAuth.signOut().then(async () => {
      await this.router.navigate(['/']);
      localStorage.removeItem('user');
      this.user = null;
    });
  }
}