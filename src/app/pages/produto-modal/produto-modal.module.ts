import { AvaliacaoModule } from './../../components/avaliacao/avaliacao.component.module';
import { MoneyBrModule } from './../../components/pipes/money-br/money-br.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoModalPage } from './produto-modal';
import { ProdutoModalPageRoutingModule } from './porduto-modal-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ProdutoModalPageRoutingModule,
    MoneyBrModule,
    AvaliacaoModule
  ],
  declarations: [
    ProdutoModalPage,
  ]
})
export class ProdutoModalModule { }
