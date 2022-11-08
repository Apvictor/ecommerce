import { CardProdutoModule } from './../../components/card-produto/card-produto.component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LojaPage } from './loja';
import { LojaPageRoutingModule } from './loja-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LojaPageRoutingModule,
    CardProdutoModule
  ],
  declarations: [LojaPage],
  entryComponents: [
    LojaPage
  ]
})
export class LojaModule { }
