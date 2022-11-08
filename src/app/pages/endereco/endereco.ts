import { EcommerceDadosService } from './../../providers/ecommerce-dados.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'page-endereco',
  templateUrl: 'endereco.html',
  styleUrls: ['./endereco.scss'],
})
export class EnderecoPage implements OnInit {

  endereco: string = '';
  telefone: string = '';

  constructor(
    private ecommerceDadosService: EcommerceDadosService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.endereco = this.ecommerceDadosService.getEndereco();
    this.telefone = this.ecommerceDadosService.getTelefone();
  }

  ligar() {
    let url = `tel:${this.telefone}`
    this.abrirUrl(url);
  }

  verMapa() {
    let url = `https://www.google.com/maps/search/?api=1&query=${this.endereco}`;
    this.abrirUrl(url);
  }

  async verWhatsapp() {
    const alert = await this.alertController.create({
      header: 'Digite sua mensagem',
      buttons: ['Cancelar',
        {
          text: 'Ok',
          handler: (data: any) => {
            let url = `https://api.whatsapp.com/send?phone=${this.telefone}&text=${data.mensagem}`
            this.abrirUrl(url);
          }
        }
      ],
      inputs: [{ type: 'textarea', name: 'mensagem', placeholder: 'mensagem' }]
    });
    await alert.present();
  }

  private abrirUrl(url: string) {
    window.open(url, '_blank').focus();
  }
}
