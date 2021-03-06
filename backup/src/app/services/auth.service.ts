import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { observable, Observable } from 'rxjs';
import * as firebase from 'firebase';
import { NoteService } from './note.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: firebase.default.UserInfo;
  public openNav: boolean;
  constructor(private auth: AngularFireAuth,private router: Router,private noteSer:NoteService) {
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        this.noteSer.addUserMail(user.email);
        this.openNavBar();
        // this.router.navigate(['archive-page']);
        this.router.navigate(['note-page']);
        
        
      }else{
        this.disableNavBar();
      }
    });
  }
  checkLogin(){
    setTimeout(() => {
      if(this.user==undefined){
        this.router.navigate(['sign-in']);
      }else{
        
      }
    },500);
  }


  openNavBar(){
    this.openNav=true;
    
    return this.openNav;
  }
  disableNavBar(){
    this.openNav=false;
    return this.openNav;
  }

  login() {
    const provider = new firebase.default.auth.GoogleAuthProvider();
    try {
      
      this.auth.signInWithPopup(provider);

      
    }
    catch (err) {
      // alert("login failed");
    }
  }

  signOut() {
    try {
      this.noteSer.deleteUserMail();
      this.auth.signOut();
      this.user = null;
      this.noteSer.userMail = undefined;
      this.noteSer.preUserMail = undefined;
      this.noteSer.getData();
      this.router.navigate(['']);
      setTimeout(() => {
        window.location.reload();
      }, 10);
      
    } catch (err) {
      // alert("Sigout failed");

    }
  }

}
