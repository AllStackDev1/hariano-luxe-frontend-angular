import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name: string;
  email: string;
  constructor( private cookieService: CookieService ) { }

  ngOnInit() {
    setInterval(() => {
        this.name = this.cookieService.get('_XSRF-ADNE_');
        this.email = this.cookieService.get('_XSRF-ADEL_');
    }, 100);
  }

  LogOut() {
        console.log('Logging out... Bye, hope to see you soon.. ' + this.name +  ' (\'^_^\')');
        sessionStorage.setItem('isLoggedIn', 'false');
        this.cookieService.deleteAll();
        console.log((this.cookieService.get('_XSRF-ADNE_')) ? this.name + ' still active' : 'Admin Logged Out Successful...');
        document.location.href = 'http://localhost:4200/#/admin-login';
    }

}
