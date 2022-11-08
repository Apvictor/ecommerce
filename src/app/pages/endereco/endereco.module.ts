import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EnderecoPage } from './endereco';
import { EnderecoPageRoutingModule } from './endereco-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnderecoPageRoutingModule
  ],
  declarations: [
    EnderecoPage,
  ],
  entryComponents: [
    EnderecoPage
  ]
})
export class EnderecoModule { }
