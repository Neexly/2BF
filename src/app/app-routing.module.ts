import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ConnexionPageComponent } from './connexion-page/connexion-page.component';
import { InscriptionPageComponent } from './inscription-page/inscription-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EventPageComponent } from './event-page/event-page.component';
import { CreateeventPageComponent } from './createevent-page/createevent-page.component';
import { ProfilPageComponent } from './profil-page/profil-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';

const routes: Routes = [
  {path: '', component: ConnexionPageComponent},
  {path: 'inscription', component: InscriptionPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'event', component: EventPageComponent},
  {path: 'createevent', component: CreateeventPageComponent},
  {path: 'profil', component: ProfilPageComponent},
  {path: 'settings', component: SettingsPageComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
