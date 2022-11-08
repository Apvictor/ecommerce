import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  appPages = [
    {
      title: 'Loja',
      url: '/app/tabs/loja',
      icon: 'storefront'
    },
    {
      title: 'Carrinho',
      url: '/app/tabs/carrinho',
      icon: 'cart'
    },
    {
      title: 'Map',
      url: '/app/tabs/endereco',
      icon: 'map'
    },
    {
      title: 'Perfil',
      url: '/app/tabs/perfil',
      icon: 'person'
    }
  ];

  dark = false;

  constructor(
    private platform: Platform,
    private router: Router,
  ) {
    this.initializeApp();
  }

  ngOnInit() { }

  initializeApp() {
    this.platform.ready().then(() => {
      this.router.navigate(['app', 'tabs', 'loja']);
    });
  }
}
