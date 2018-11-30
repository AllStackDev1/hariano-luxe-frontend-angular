import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {

      $('.not-login').css('display', 'none');
      sessionStorage.setItem('isLoggedIn', 'false');

      // [ Focus input ]
      $('.input100').each(function() {
          $(this).on('blur', function() {
              if ($(this).val().toString().trim() !== '') {
                  $(this).addClass('has-val');
              } else {
                  $(this).removeClass('has-val');
              }
          });
      });
      // [ Show pass ]
      let showPass = 0;
      $('.btn-show-pass').on('click', function() {
          if (showPass === 0) {
              $(this).next('input').attr('type', 'text');
              $(this).find('i').removeClass('zmdi-eye');
              $(this).find('i').addClass('zmdi-eye-off');
              showPass = 1;
          }else {
              $(this).next('input').attr('type', 'password');
              $(this).find('i').addClass('zmdi-eye');
              $(this).find('i').removeClass('zmdi-eye-off');
              showPass = 0;
          }
      });

      // [ Validate ]*/
      const input = $('.validate-input .input100');
      $('.validate-form').on('submit', function() {
          let check = true;
          for (let i = 0; i < input.length; i++) {
              if (validate(input[i]) == false) {
                  showValidate(input[i]);
                  check = false;
              }
          }
          if (check) {

              $('#modal').css('display', 'block');
              $('#loader-img').css('display', 'block');
              $('#login-txt').css('display', 'block');

              const email = $('#email').val();
              const password = $('#pass').val();
              $.ajax({
                  type: 'POST',
                  url: 'http://127.0.0.1:8000/api/admin-login',
                  data: 'email=' + email + '&password=' + password,
                  success: function (data) {
                      if (data.success === true) {
                          sessionStorage.setItem('_XSRF-TOKEN_', data.token.token);
                          sessionStorage.setItem('_XSRF-ROLE_', data.role);

                          $.ajax({
                              type: 'GET',
                              url: 'http://127.0.0.1:8000/api/user',
                              headers: {
                                  'Authorization': 'Bearer ' + sessionStorage.getItem('_XSRF-TOKEN_'),
                                  'Content-Type': 'application/json',
                                  'Accept': 'application/json'
                              },
                              success: function (res) {

                                  $('#login-txt').html('<i class="fa fa-spinner" aria-hidden="true"></i> Opening Admin Portal...');
                                  sessionStorage.setItem('admin-name', res.name);
                                  sessionStorage.setItem('admin-email', res.email);
                                  setTimeout( function () {
                                      document.location.href = 'http://localhost:4200/#/dashboard';
                                  }, 1000);
                              },
                              error: function (XMLHttpRequest) {
                                  console.log(XMLHttpRequest);
                              },
                              dataType: 'json'
                          });

                      } else {
                          $('#login-txt').fadeOut('fast').css('display', 'none');
                          $('#loader-img').fadeOut('fast').css('display', 'none');
                          alert(data.message);
                          $('.validate-form .input100').addClass('alert-validate');
                      }
                  },
                  error: function (XMLHttpRequest) {
                      console.log(XMLHttpRequest);
                  },
                  dataType: 'json'
              });
          }
      });

      $('.validate-form .input100').each(function() {
          $(this).focus(function() {
              hideValidate(this);
          });
      });

      function validate (input) {
          if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
              if ($(input).val().toString().trim().
              match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                  return false;
              }
          } else {
              if ($(input).val().toString().trim() == '') {
                  return false;
              }
          }
      }

      function showValidate(input) {
          const thisAlert = $(input).parent();

          $(thisAlert).addClass('alert-validate');
      }

      function hideValidate(input) {
          const thisAlert = $(input).parent();

          $(thisAlert).removeClass('alert-validate');
      }

  }
}
