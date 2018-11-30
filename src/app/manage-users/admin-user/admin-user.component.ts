import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

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
