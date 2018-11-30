import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      if (sessionStorage.getItem('isLoggedIn') === 'true') {
          $('.not-login').css('display', 'block');
          console.log('you are currently managing orders (\'^_^\')');
      } else {
          document.location.href = 'http://localhost:4200/#/admin-login';
      }
  }

}
