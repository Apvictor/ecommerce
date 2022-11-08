import { AvaliacaoModule } from './../avaliacao/avaliacao.component.module';
import { MoneyBrModule } from './../pipes/money-br/money-br.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardProdutoComponent } from './card-produto.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        MoneyBrModule,
        AvaliacaoModule
    ],
    declarations: [
        CardProdutoComponent,
    ],
    exports: [
        CardProdutoComponent
    ]
})
export class CardProdutoModule { }
