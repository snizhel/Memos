import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(private auth: AngularFireAuth) {
   }

//    async register(){
// const auth = new firebase.default.auth.EmailAuthProvider_Instance
// // this.auth.signInWithEmailAndPassword(email, password);
// // this.auth.createUserWithEmailAndPassword(email,password)   }

  ngOnInit(): void {
  }

}

var actionCodeSettings = {
  url: '',
};
