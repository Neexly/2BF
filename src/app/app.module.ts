import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from "@angular/forms";
import { ConnexionPageComponent } from './connexion-page/connexion-page.component';
import { InscriptionPageComponent } from './inscription-page/inscription-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EventPageComponent } from './event-page/event-page.component';
import { CreateeventPageComponent } from './createevent-page/createevent-page.component';
import { ProfilPageComponent } from './profil-page/profil-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';

@NgModule({
  declarations: [AppComponent, ConnexionPageComponent, InscriptionPageComponent, HomePageComponent, EventPageComponent, CreateeventPageComponent, ProfilPageComponent, SettingsPageComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
