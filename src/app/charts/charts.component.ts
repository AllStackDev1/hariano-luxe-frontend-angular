import { Component, OnInit } from '@angular/core';
import iziModal from 'izimodal/js/iziModal';
declare var Morris: any;
declare var $: any;
$.fn.iziModal = iziModal;

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

      if (sessionStorage.getItem('isLoggedIn') === 'true') {
          $('.not-login').css('display', 'block');
          console.log('you are at dashboard');
      } else {
          document.location.href = 'http://localhost:4200/#/admin-login';
      }

      /* MORRIS BAR CHART
      -----------------------------------------*/
      Morris.Bar({
          element: 'morris-bar-chart2',
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
          element: 'morris-donut-chart2',
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

      // default
      $(document).on('click', '.open-default', function(event) {
          event.preventDefault();
          $('#modal-default').iziModal('open');
      });
      $('#modal-default').iziModal();

      // options
      $(document).on('click', '.open-options', function(event) {
          event.preventDefault();
          $('#modal-options').iziModal('open');
      });


      // iframe
      $(document).on('click', '.open-iframe', function(event) {
          event.preventDefault();
          $('#modal-iframe').iziModal('open', this);
      });
      $('#modal-iframe').iziModal({
          iframe: true,
          iframeWidth: 400,
          iframeHeight: 300,
          iframeURL: 'https://codepen.io/'
      });

      // alert
      $('#modal-alert').iziModal({
          headerColor: '#d43838',
          width: 400,
          timeout: 10000,
          pauseOnHover: true,
          timeoutProgressbar: true,
          attached: 'bottom'
      });
      $(document).on('click', '.open-alert', function (event) {
          event.preventDefault();
          $('#modal-alert').iziModal('open');
      });

  }

}
