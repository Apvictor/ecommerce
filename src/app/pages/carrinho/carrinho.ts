import { CarrinhoEmissor } from './../../dominio/carrinho/carrinho-emissor';
import { Produto } from './../../dominio/produto/produto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
  styleUrls: ['./carrinho.scss'],
})
export class CarrinhoPage implements OnInit {
  produtos: Produto[] = [];

  constructor(
    private carrinhoEmissor: CarrinhoEmissor
  ) { }

  ngOnInit() {
    this.carrinhoEmissor.get().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }
}
