import { CardProdutoModule } from './../../components/card-produto/card-produto.component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CarrinhoPage } from './carrinho';
import { CarrinhoPageRoutingModule } from './carrinho-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CarrinhoPageRoutingModule,
    CardProdutoModule
  ],
  declarations: [CarrinhoPage],
})
export class CarrinhoModule { }
