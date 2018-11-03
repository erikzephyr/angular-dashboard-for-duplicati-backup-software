import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router, UrlTree } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import { EmpresasComponent } from "../empresas/empresas.component";
import { count } from "rxjs/operator/count";
import { database } from "firebase/app";
import * as firebase from 'firebase';

@Component({
  selector: 'app-ordenadores',
  templateUrl: './ordenadores.component.html',
  styleUrls: ['./ordenadores.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})

/**
 * Implementa el componente que se encarga de mostrar los ordenadores.
 */
export class OrdenadoresComponent implements OnInit {
  nombre: any;                                      // nombre del usuario.
  ordenadores: FirebaseListObservable<any[]>;       // Ordenadores de la empresa
  pc: FirebaseObjectObservable<any[]>;              // nuevo ordenador.
  listaDeCopias: Array<Array<string>>;              // Tabla con las copias. el indice es el ordenador y dentro un array con las copias.
  id: String;                                       // identificador de la empresa.
  aux: any;                                         // Variable auxiliar.
  estados:string[];                                 // Estados posibles de las copias.
  estadosCopias: any;                               // Estado actual.
  pcActualIp: any;                                  // Ip del ordenador que queremos eliminar.
  pcActualLlave: any;                               // Llave del pc actual para hacerle operaciones.
  bActualmente: boolean;                            // Estado actual e la Revisión (Revisado = true/ Pendiente = false)
  nActualmente: string;                             // Nombre del estado actual.
  cActualmente: string;                             // Clase del elemento para revisado o pendiente.
  listaDeOrdenadores:any = new Array();             // Lista de los ordenadores.
  estadoCopias: any;                                // Estado de cada copia.
  estadoEmpresa: any;                               // Estado gral de la empresa.
  public llave:string;                              // Llave de un ordenador pública.
  actual: any;                                      // Estado actual.
  revisado: any;                                    // Estado de revisado.
  nCopias: any;                                     // Número de copias realizadas.
  default: any;                                     // Estado por defecto.
  pcParaRevisado:any;                               // Pc del que queremos modificar su estado de revisado o pendiente.
  usuario: any;                                     // Usuario actual.
  flagRevisado: boolean;                            // Flag boolean para saber si está revisado o no.
  nombreUsuario: any;                               // Nombre del usuario actual.

  /**
   * Comprueba la sesión e inicializa las variables.
   */
  constructor(public af: AngularFire,private router: Router) {
    this.af.auth.subscribe(auth => {
      if(auth) {
        this.nombre = auth;
        var index = auth.auth.email.indexOf('@');
        var l = auth.auth.email.length;
        var u = auth.auth.email.slice(0, index);
        this.setNombreUsuario(u);
      }      
    });
    this.revisado = false;
    this.estados = ['default','Succes','Error','warning'];
    this.estadosCopias = new Array();
    this.bActualmente = false;
    this.nActualmente = "Pendiente";
    this.cActualmente = "ui inverted red button" ;
    this.ordenadores = af.database.list('/empresas/' + this.id + '/ordenadores');
    this.flagRevisado = false;
  }
  
  /**
   * Añade un nuevo ordenador sin modificar lo anterior.
   */
  nuevoOrdenadorNoDestructivo(newIP: String) {
    var empresas = this;

    // Añade la dirección a /ordenadores
    this.pc = this.af.database.object('/empresas/' + this.id + '/ordenadores');
    var identificador = this.af.database.list('/empresas/' + this.id).$ref.ref.child("ordenadores").push().key;
    this.pc.update({[identificador]: newIP});6

    // Añade la copia correspondiente a esa ip.
    this.pc = this.af.database.object('/empresas/' + this.id + '/copias');
    var aux = this.af.database.list('/empresas/' + this.id).$ref.ref.child("copias").child(identificador).push().key;
    this.pc.update({[identificador]: { [aux]: { estado: "default", fecha: ""}}});
    
    // Añade la copia con revision correspondiente a esa ip.
    this.pc = this.af.database.object('/empresas/' + this.id + '/revisado');
    var aux = this.af.database.list('/empresas/' + this.id).$ref.ref.child("copias").child(identificador).push().key;
    this.pc.update({[identificador]: { [aux]: { revisado: "no"}}});
}

  /**
   * Elimina el ordenador actual.
   */
  borrar(ip: String) {
    var empresas = this;
    console.log(ip);
    this.pc = this.af.database.object('/empresas/' + this.id + '/ordenadores/' + ip);
    this.pc.remove();
  }

  /**
   * Abre la interfaz de duplicati.
   */
  administrar(item: string) {
    console.log(item);
    open('http://' + item);
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
   * Muestra el número de ordenadores de la empresa.
   */
  public numCopias(pcKey: string):any {
    this.af.database.list('/empresas/' + this.id).$ref.ref.child("copias").child(pcKey).on("value", function(snapshot) {
      this.nCopias = snapshot.numChildren();

    }, this);
   
    
    return this.nCopias - 1;
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
   * Vuelve al cofmponente EmpresasComponent.
   */
  volver() {
    this.router.navigateByUrl('/empresas');
  }

  /**
   * Cierra la sesión actual.
   */
  cerrarSesion() {
     this.af.auth.logout();
     this.router.navigateByUrl('/login');
  }

  /**
   * Establece el id de la empresa que queremos ver.
   */
  setID(nID) {
    this.id = nID;
  }

  /**
   * Obtiene el estado de las copias.
   */
  obtenerCopias() {
    var th = this;
    var db = firebase.database();
    var ref = db.ref('/empresas/' + this.id + '/copias/');
    ref.on('value', th.obtenerListaPcs, th);
    
  }

  /**
   * Obtiene la lista de pcs para conocer el estado de las copias de Firebase.
   */
  obtenerListaPcs(snapshot) {
    var i, j, k, l, copias, keys2, keys, pcs, th, est, db, ref, warning, error;
    th = this;
    pcs = snapshot.val();
    keys = Object.keys(pcs);
    db = firebase.database();
    th.estadoCopias = new Array();
    th.listaDeCopias = new Array();
    var aux = new Array();
    warning = false;
    error = false;

    for (i of keys) {
      pcs = snapshot.child(i).val();
      keys2 = Object.keys(pcs);
      for (j of keys2) {
        copias = snapshot.child(i).child(j).child('estado').exportVal();
        aux.push(copias);
      }
      th.listaDeCopias.push(aux);
      aux = new Array();
      
    }

    this.pc = this.af.database.object('/empresas/' + th.id);
    for(i of th.listaDeCopias) {
      console.log(i);
      var l = i.length;
      if (i[l - 1] == 'warning') {
        warning = true;
      } else if (i[l - 1] == 'Error') {
        warning = false;
        error = true;
      }
    }
    console.log('error: ' + error + ', warning: ' + warning);

    if(warning == true) {
      this.pc.update({estado: 'warning'});
    } else if(error == true) {
      this.pc.update({estado: 'Error'});
    } else if (this.default == true){
      this.pc.update({estado: 'default'});
    } else {
      this.pc.update({estado: 'Ok'});
    }
  }

  /**
   * 
   * @param cp Obtiene una lista con las llaves de cada copia.
   */
  obtenerListaCopias(cp) {
    var cps = cp.val();
    var keys = Object.keys(cps);
    //console.log(keys);
  }

  /**
   * Recibe una llave y guarda el valor.
   * @param l 
   */
  setLlave(l:string) {
    this.llave = l;
  }

  /**
   * Obtiene el estado de un pc.
   * @param pc pc del que queremos obtener el estado.
   */
  public obtenerEstado(pc: string):any {
    var th = this;
    var db = firebase.database();
    var ref = db.ref('/empresas/' + this.id + '/copias/' + pc);
    ref.on('value', th.getEstado, th);

    switch(this.actual) {
      case 'default': this.actual = 'default'; break;
      case 'Ok': this.actual = 'Ok'; break;
      case 'Error': this.actual = 'Error'; break;
      case 'warning': this.actual = 'warning'; break;
      default: break;
    }
    return this.actual;
  }

  /**
   * 
   * @param snapshot Obtiene el estado de un snapshot
   */
  getEstado(snapshot) {
    var pcs, keys, db, th, keys2, i, j, ultimaCopia;
    th = this;
    pcs = snapshot.val();
    keys = Object.keys(pcs);
    db = firebase.database();

    for (i of keys) {
      ultimaCopia = snapshot.child(i).child('estado').val();
    }
    this.actual = ultimaCopia;
  }

  /**
   * Obtiene el estado de revisado de un pc.
   * @param pc pc del que queremos obtener el estado de revisado.
   */
  public obtenerRevisado(pc: string): any {
    var th = this;
    var db = firebase.database();
    var ref = db.ref('/empresas/' + this.id + '/revisado/' + pc);
    ref.on('value', th.getRevisado, th);
    if(th.flagRevisado == false) {
      this.nActualmente = "Pendiente";
      this.cActualmente = "ui inverted red button" ;
    }
  }

  /**
   * Obtiene el estado de revisado de un snapshot.
   * @param snapshot snapshot del que queremos sacar.
   */
  getRevisado(snapshot) {
    var pcs, keys, db, th, keys2, i, j, ultimaCopia;
    th = this;
    pcs = snapshot.val();
    keys = Object.keys(pcs);
    db = firebase.database();

    for (i of keys) {
      ultimaCopia = snapshot.child(i).child('revisado').val();
    }
    this.revisado = ultimaCopia;
  }

  /**
   * Cambia en Firebase el estad de revisado en la base de datos.
   * @param pc del que queremos cambiar.
   */
  cambiarRevisado(pc: string) {
    var th = this;
    var db = firebase.database();
    var ref = db.ref('/empresas/' + this.id + '/revisado/' + pc);
    this.pcParaRevisado = pc;
    th.obtenerRevisado(pc);
    ref.on('value', th.setRevisado, th);
    if(this.revisado == 'si') {
      console.log('revisado');
      this.nActualmente = "Revisado";
      this.cActualmente = "ui inverted green button";
      this.flagRevisado = true;
    }
  }

  /**
   * Cambia en Firebase el estad de revisado en la base de datos.
   * @param snapshot del que cambiamos el estado de revisado.
   */
  setRevisado(snapshot) {
    var pcs, keys, db, th, keys2, i, j, ultimaCopia;
    th = this;
    pcs = snapshot.val();
    keys = Object.keys(pcs);
    db = firebase.database();

    for (i of keys) {
      this.pc = this.af.database.object('/empresas/' + th.id + '/revisado/' + this.pcParaRevisado + '/' + i);
      if(this.revisado == 'no') {
        //console.log('cambiando a si');
        this.pc.update({revisado: 'si'});
      } 
    }
    
  }

  /**
   * Obtiene el id de la empresa actual.
   */
  getID() {
    return this.id;
  }

  /**
   * Ordenador queremos eliminar.
   * @param llave del pc.
   * @param ip del pc
   */
  cualEliminar(llave: string, ip: string) {
    this.pcActualIp = ip;
    this.pcActualLlave = llave;
  }

  /**
   * Se ejecuta al iniciar el componente.
   */
  ngOnInit() {
    this.obtenerCopias();
  }

}
