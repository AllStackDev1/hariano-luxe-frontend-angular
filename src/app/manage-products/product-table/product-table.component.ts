import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      if (sessionStorage.getItem('isLoggedIn') === 'true') {
          $('.not-login').css('display', 'block');
          console.log('you are currently managing products (\'^_^\')');
      } else {
          document.location.href = 'http://localhost:4200/#/admin-login';
      }
  }

}
