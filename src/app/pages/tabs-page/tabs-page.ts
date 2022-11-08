import { CarrinhoEmissor } from './../../dominio/carrinho/carrinho-emissor';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage implements OnInit {

  totalItensCarrinho = 0;

  constructor(
    private carrinhoEmissor: CarrinhoEmissor
  ) { }

  ngOnInit() {
    this.carrinhoEmissor.getTotal().subscribe((totalItens) => {
      this.totalItensCarrinho = totalItens;
    })
  }

}
