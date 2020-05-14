import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {}

  async goToEvent()
  {
    this.router.navigateByUrl('event');
  }

  async goToCreateevent()
  {
    this.router.navigateByUrl('createevent');
  }

  async goToProfil()
  {
    this.router.navigateByUrl('profil');
  }

  async goToSettings()
  {
    this.router.navigateByUrl('settings');
  }

}
