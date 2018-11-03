import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';
import {NglModule} from 'ng-lightning/ng-lightning';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})

/**
 * Este componente se encarga de la interfaz del login con el correo electrónico conectando con Firebase.
 */
export class EmailComponent implements OnInit {

    state: string = '';
    error: any;
    provider: any;
    method: any;
    email: any;
    password: any;

    /**
     * Si el usuario ha iniciado previamente omite el login.
     */
    constructor(public af: AngularFire,private router: Router) {
      this.af.auth.subscribe(auth => {
        if(auth) {
          this.router.navigateByUrl('/dashboard');
        }
      });
  }

  /**
   * Después de rellenar los datos, comprueba que exista, inicia sesión y redirige al componente dashboard.
   */
  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }).then(
        (success) => {
        console.log(success);
          this.router.navigateByUrl('/dashboard');
        //this.router.navigate(['/empresas']);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }

  /**
   * Se ejecuta al iniciar sesión.
   */
  ngOnInit() {
  }

}
