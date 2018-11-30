import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

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
