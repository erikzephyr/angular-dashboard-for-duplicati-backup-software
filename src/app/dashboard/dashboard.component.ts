import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})

/**
 * Este componente muestra la página del dashboard.
 */
export class DashboardComponent implements OnInit {
  nombreUsuario: any;                                  // Nombre del usuario.
  hoy: number = Date.now();

  // Datos de muestra de la gráfica.
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56], label: 'Copias éxitosas'},
    {data: [10, 20, 10, 40, 10, 13, 33, 10, 20, 10, 40, 10], label: 'Copias con warning'},
    {data: [5, 9, 0, 8, 6, 5, 4, 5, 9, 0, 8, 6], label: 'Copias con error'}
  ];

  // Meses de la gráfica.
  public lineChartLabels:Array<any> = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  
  // Tipo de gráfica.
  public lineChartType:string = 'line';

  // Colores de las gráfica.
  public lineChartColors:Array<any> = [
    { // exitosas
      backgroundColor: 'rgba(76, 175, 80, 0.1)',
      borderColor: 'rgba(76, 175, 80, 1)',
      pointBackgroundColor: 'rgba(76, 175, 80, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(76, 175, 80, 0.8)'
    },
    { // warning
      backgroundColor: 'rgba(255, 193, 7, 0.1)',
      borderColor: 'rgba(255, 193, 7, 1)',
      pointBackgroundColor: 'rgba(255, 193, 7, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 193, 7, 0.8)'
    },
    { // error
      backgroundColor: 'rgba(244, 67, 54, 0.1)',
      borderColor: 'rgba(244, 67, 54, 1)',
      pointBackgroundColor: 'rgba(244, 67, 54, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(244, 67, 54, 0.8)'
    }
  ];

  // Inicia el componente
  constructor(public af: AngularFire, private router: Router) { 
    this.af.auth.subscribe(auth => {
      if(auth) {
        var nombre = auth;
        var index = auth.auth.email.indexOf('@');
        var l = auth.auth.email.length;
        var u = auth.auth.email.slice(0, index);
        this.setNombreUsuario(u);
      }
    });
  }

  // evento de click en la gráfica
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  // evento de hover en la gráfica
  public chartHovered(e:any):void {
    console.log(e);
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
   * Método que cierra la sesión actual del usuario.
   */
  cerrarSesion() {
     this.af.auth.logout();
     this.router.navigateByUrl('/login-email');
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
   * Se ejecuta al cargar el componente.
   */
  ngOnInit() { }

}
