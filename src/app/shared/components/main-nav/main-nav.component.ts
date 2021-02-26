import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})

export class MainNavComponent implements OnInit {

  routeName: string = 'Memos';
  labels: string[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  constructor(private breakpointObserver: BreakpointObserver, public auth: AuthService){

  }

  ngOnInit(): void {
  }

  async loginGoogle() {
    try {
      await this.auth.oAuthLogin();
      alert('Login successfully')
    } catch (err) {
      alert('Login failed')
    }
  }

  async logout() {
    await this.auth.logout();
    alert('Logout successfully')
  }

}