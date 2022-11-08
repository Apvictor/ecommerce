import { MoneyBrModule } from '../pipes/money-br/money-br.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AvaliacaoComponent } from './avaliacao.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        MoneyBrModule
    ],
    declarations: [
        AvaliacaoComponent,
    ],
    exports: [
        AvaliacaoComponent
    ]
})
export class AvaliacaoModule { }
