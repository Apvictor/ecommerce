import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
  styleUrls: ['./perfil.scss'],
})
export class PerfilPage implements OnInit {

  username: string;

  constructor(
    public alertCtrl: AlertController,
    public router: Router,
  ) { }

  ngOnInit() { }

}
