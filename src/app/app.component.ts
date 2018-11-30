import {Component, OnInit} from '@angular/core';;
import iziModal from 'izimodal/js/iziModal';
declare var $: any;
$.fn.iziModal = iziModal;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'app';

  constructor() { }

  ngOnInit() {
      $('#modal-options').iziModal({
          headerColor: '#26A69A',
          width: '50%',
          overlayColor: 'rgba(0, 0, 0, 0.5)',
          fullscreen: true,
          transitionIn: 'fadeInUp',
          transitionOut: 'fadeOutDown'
      });
  }
}




