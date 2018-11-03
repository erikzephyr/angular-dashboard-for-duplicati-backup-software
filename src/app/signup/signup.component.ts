import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})

/**
 * Este componente implementa la página para crear un nuevo usuario en Firebase.
 */
export class SignupComponent implements OnInit {

  state: string = '';
  error: any;               // Error en el formulario
  email: any;               // Email del formulario
  password: any;            // Contraseña del formulario

  constructor(public af: AngularFire,private router: Router) {

  }

  /**
   * Envía el formulario y guarda el usuario en Firebase.
   */ 
  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
        this.router.navigate(['/empresas'])
      }).catch(
        (err) => {
        this.error = err;
      })
    }
  }

  /**
   * Se ejecuta el iniciar el componente.
   */
  ngOnInit() {
  }

}
