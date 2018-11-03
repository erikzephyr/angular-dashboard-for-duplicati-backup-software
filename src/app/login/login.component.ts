import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})

/**
 * Este componente implementa el login con cuentas sociales.
 */
export class LoginComponent implements OnInit {

  error: any;
  constructor(public af: AngularFire,private router: Router) {

      this.af.auth.subscribe(auth => { 
      if(auth) {
        this.router.navigateByUrl('/empresas');
      }
    });

  }

  /**
   * Login con tu cuenta de Facebook.
   */
  loginFb() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['/empresas']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }

  /**
   * Login con tu cuenta de Google.
   */
  loginGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['/empresas']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }

  /**
   * Se ejecuta al iniciar el componente.
   */
  ngOnInit() {
  }

}
