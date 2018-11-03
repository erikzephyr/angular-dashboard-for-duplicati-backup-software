import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';
import { OrdenadoresComponent } from './ordenadores/ordenadores.component';
import { NglModule } from 'ng-lightning/ng-lightning';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ChartsModule } from 'ng2-charts';


// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyA3tztC041cbm8D1mP596lLw9n2OnNZmGU',
  authDomain: 'duplicati-25268.firebaseapp.com',
  databaseURL: 'https://duplicati-25268.firebaseio.com',
  storageBucket: 'duplicati-25268.appspot.com',
  messagingSenderId: '167975600860'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    EmpresasComponent,
    OrdenadoresComponent,
    DashboardComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes,
    ChartsModule,
    NglModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
