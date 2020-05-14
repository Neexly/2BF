import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.scss'],
})
export class ConnexionPageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {}

  async goToInscription()
  {
    this.router.navigateByUrl('inscription');
  }

  async goToHome()
  {
    this.router.navigateByUrl('home');
  }

}
