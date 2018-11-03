import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import { OrdenadoresComponent } from "../ordenadores/ordenadores.component";
import { database } from "firebase/app";

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})

/**
 * Este componente implementa el componente de las empresas.
 */
export class EmpresasComponent implements OnInit {
  
  nombre: any;                                  // Nombre del usuario.
  empresas: FirebaseListObservable<any[]>;      // Objeto con las empresas.
  empresa: FirebaseObjectObservable<any>;       // Objeto con una nueva empresa.
  estados:string[];                             // Estados posibles.
  actual: any;                                  // Estado actual de una empresa.
  numPcs: any;                                  // Número de pcs que tiene la Empresa
  nombreUsuario: any;                           // Nombre del usuario logueado.

  /**
   * Comprueba la sesión e inicializa las variables.
   */
  constructor(public af: AngularFire,private router: Router) {
    this.estados = ['default','Ok','Error','Warning'];
    this.actual = 'default';
    this.af.auth.subscribe(auth => {
      if(auth) {
        //console.log(auth.auth.email);
        this.nombre = auth;
        var index = auth.auth.email.indexOf('@');
        var l = auth.auth.email.length;
        var u = auth.auth.email.slice(0, index);
        this.setNombreUsuario(u);
      }
    });
    this.empresas = af.database.list('/empresas');
  }
  
  /*
   *  Este método borra toda la base datos por el nuevo valor. 
   */
  nuevaEmpresaDestructivo(nEmpresa: string, nDescripcion: string) {
    this.empresa = this.af.database.object('/empresas');
    this.empresa.set({[nEmpresa]: {descripcion: nDescripcion, estado: 'default', copias: 1, ordenadores: {}}});
  }

  /* 
  * Este método añade un nuevo valor sin borrar lo anterior.
  */
  nuevaEmpresaNoDestructivo(nEmpresa: string, nDescripcion: string) {
    this.empresa = this.af.database.object('/empresas');
    this.empresa.update({[nEmpresa]: {descripcion: nDescripcion, estado: 'default', copias: 1, ordenadores: {}}});
  }

  /*
  * Borra la empresa actual.
  */
  borrar(empresa: String) {
    this.empresa = this.af.database.object('/empresas/' + empresa);
    this.empresa.remove();
  }

  /**
   * Método que gestiona el estado de la empresa.
   */
  public obtenerEstado(empresa: String): any {
    var th = this;
    this.empresa = this.af.database.object('/empresas/' + empresa + '/estado');
    this.empresa.$ref.on('value',th.getEstado,th);

    switch(this.actual) {
      case 'default': this.actual = 'default'; break;
      case 'Ok': this.actual = 'Ok'; break;
      case 'Error': this.actual = 'Error'; break;
      case 'Warning': this.actual = 'Warning'; break;
      default: break;
    }
    return this.actual;
  }

  /**
   * 
   * @param snapshot Obtiene el estado del snapshot que reciba.
   */
  getEstado(snapshot) {
    this.actual = snapshot.val();
  }

  /**
   * Muestra el número de ordenadores que tiene una empresa.
   */
  public mostrarNum(empresa: string):any {
    this.af.database.list('/empresas/' + empresa).$ref.ref.child("ordenadores").on("value", function(snapshot) {
      var aux = snapshot.numChildren();
      this.numPcs = aux;
    }, this);
    return this.numPcs;
  }

  /**
   * Método que cierra la sesión actual del usuario.
   */
  cerrarSesion() {
     this.af.auth.logout();
     this.router.navigateByUrl('/login-email');
  }

  /**
   * Este método redirige al usuario a ver los ordenadores de la empresa pasada por parámetro.
   */
  ordenadores(empresa: String) {
    OrdenadoresComponent.prototype.setID(empresa);
    console.log('/ordenadores/' + empresa);
    this.router.navigateByUrl('/ordenadores/' + empresa);
  }

  /**
   * Redirige al componente empresas.
   */
  public irEmpresas() {
    this.router.navigateByUrl('/empresas');
  }

  /**
   * Redirige al componente profile.
   */
  public irProfile() {
    this.router.navigateByUrl('/');
  }

  /**
   * Obtiene el nombre de usuario.
   */
  public getNombreUsuario():any {
    return this.nombreUsuario;
  }

  /**
   * 
   * @param nuevoNombre Nuevo nombre del usuario
   */
  setNombreUsuario(nuevoNombre: string) {
    this.nombreUsuario = nuevoNombre;
  }

  /**
   * Se ejecuta al inicar el componente.
   */
  ngOnInit() {
    
  }
}
