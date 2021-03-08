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
  email = "";
  password = "";
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle


  constructor(private authSer: AuthService, private router: Router) { }



  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  validateForm(email, password) {
    if (email.lenght === 0) {
      this.errorMessage = "please enter email id";
      return false;
    }

    if (password.lenght === 0) {
      this.errorMessage = "please enter password";
      return false;
    }

    if (password.lenght < 6) {
      this.errorMessage = "password should be at least 6 char";
      return false;
    }

    this.errorMessage = '';
    return true;

  }
  loginByEmail() {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authSer.loginWithEmail(this.email, this.password)
        .then(() => {
          this.router.navigate(['/note-page'])
          // alert("susscess login!")
        }).catch(_error => {
          this.error = _error
          this.router.navigate(['/sign-in'])
        })
    }
  }
  login() {
    this.authSer.login();
  }

  signOut() {
    this.authSer.signOut();
  }

}
