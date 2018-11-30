import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

declare var Morris: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    name: string;
    email: string;
    token: string;
    role: string;

    constructor( private cookieService: CookieService ) {}
    ngOnInit() {
        this.name = (sessionStorage.getItem('admin-name')) ? sessionStorage.getItem('admin-name') : this.cookieService.get('_XSRF-ADNE_');
        this.email = (sessionStorage.getItem('admin-email')) ? sessionStorage.getItem('admin-email') : this.cookieService.get('_XSRF-ADEL_');
        this.token = (sessionStorage.getItem('_XSRF-TOKEN_')) ? sessionStorage.getItem('_XSRF-TOKEN_') : this.cookieService.get('_XSRF-TOKEN_');
        this.role = (sessionStorage.getItem('_XSRF-ROLE_')) ? sessionStorage.getItem('_XSRF-ROLE_') : this.cookieService.get('_XSRF-ROLE_');

        if (!this.name && !this.email && this.role !== '1') {
            document.location.href = 'http://localhost:4200/#/admin-login';
        } else {
            this.cookieService.set( '_XSRF-ADNE_', this.name, 1, 'http://localhost:4200/#/admin-login');
            this.cookieService.set( '_XSRF-ADEL_', this.email, 1, 'http://localhost:4200/#/admin-login');
            this.cookieService.set( '_XSRF-TOKEN_', this.token, 1, 'http://localhost:4200/#/admin-login');
            this.cookieService.set( '_XSRF-ROLE_', this.role, 1, 'http://localhost:4200/#/admin-login');
            sessionStorage.clear();
            $('.not-login').css('display', 'block');
            console.log('you are currently at dashboard (\'^_^\')');
            sessionStorage.setItem('isLoggedIn', 'true');
        }

        /* MORRIS BAR CHART
        -----------------------------------------*/
        Morris.Bar({
            element: 'morris-bar-chart',
            data: [{
                y: '2006',
                a: 100,
                b: 90
            }, {
                y: '2007',
                a: 75,
                b: 65
            }, {
                y: '2008',
                a: 50,
                b: 40
            }, {
                y: '2009',
                a: 75,
                b: 65
            }, {
                y: '2010',
                a: 50,
                b: 40
            }, {
                y: '2011',
                a: 75,
                b: 65
            }, {
                y: '2012',
                a: 100,
                b: 90
            }],
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Series A', 'Series B'],
            hideHover: 'auto',
            resize: true
        });

        /* MORRIS DONUT CHART
        ----------------------------------------*/
        Morris.Donut({
            element: 'morris-donut-chart',
            data: [{
                label: 'Download Sales',
                value: 12
            }, {
                label: 'In-Store Sales',
                value: 30
            }, {
                label: 'Mail-Order Sales',
                value: 20
            }],
            resize: true
        });

        /* MORRIS AREA CHART
        ----------------------------------------*/

        Morris.Area({
            element: 'morris-area-chart',
            data: [{
                period: '2010 Q1',
                iphone: 2666,
                ipad: null,
                itouch: 2647
            }, {
                period: '2010 Q2',
                iphone: 2778,
                ipad: 2294,
                itouch: 2441
            }, {
                period: '2010 Q3',
                iphone: 4912,
                ipad: 1969,
                itouch: 2501
            }, {
                period: '2010 Q4',
                iphone: 3767,
                ipad: 3597,
                itouch: 5689
            }, {
                period: '2011 Q1',
                iphone: 6810,
                ipad: 1914,
                itouch: 2293
            }, {
                period: '2011 Q2',
                iphone: 5670,
                ipad: 4293,
                itouch: 1881
            }, {
                period: '2011 Q3',
                iphone: 4820,
                ipad: 3795,
                itouch: 1588
            }, {
                period: '2011 Q4',
                iphone: 15073,
                ipad: 5967,
                itouch: 5175
            }, {
                period: '2012 Q1',
                iphone: 10687,
                ipad: 4460,
                itouch: 2028
            }, {
                period: '2012 Q2',
                iphone: 8432,
                ipad: 5713,
                itouch: 1791
            }],
            xkey: 'period',
            ykeys: ['iphone', 'ipad', 'itouch'],
            labels: ['iPhone', 'iPad', 'iPod Touch'],
            pointSize: 2,
            hideHover: 'auto',
            resize: true
        });

        /* MORRIS LINE CHART
        ----------------------------------------*/
        Morris.Line({
            element: 'morris-line-chart',
            data: [{
                y: '2006',
                a: 100,
                b: 90
            }, {
                y: '2007',
                a: 75,
                b: 65
            }, {
                y: '2008',
                a: 50,
                b: 40
            }, {
                y: '2009',
                a: 75,
                b: 65
            }, {
                y: '2010',
                a: 50,
                b: 40
            }, {
                y: '2011',
                a: 75,
                b: 65
            }, {
                y: '2012',
                a: 100,
                b: 90
            }],
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Series A', 'Series B'],
            hideHover: 'auto',
            resize: true
        });

    }
}
