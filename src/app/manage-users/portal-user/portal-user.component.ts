import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal-user',
  templateUrl: './portal-user.component.html',
  styleUrls: ['./portal-user.component.css']
})
export class PortalUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      if (sessionStorage.getItem('isLoggedIn') === 'true') {
          $('.not-login').css('display', 'block');
          console.log('you are currently managing users (\'^_^\')');
      } else {
          document.location.href = 'http://localhost:4200/#/admin-login';
      }
  }

}
