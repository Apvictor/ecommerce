import { CarrinhoEmissor } from './../../dominio/carrinho/carrinho-emissor';
import { Produto } from './../../dominio/produto/produto.model';
import { ProdutoService } from './../../dominio/produto/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-produto-modal',
  styleUrls: ['./produto-modal.scss'],
  templateUrl: 'produto-modal.html'
})
export class ProdutoModalPage implements OnInit {

  produto = new Produto;
  avaliacoes: boolean[] = [true, true, true, false, false];

  constructor(
    private activatedRoute: ActivatedRoute,
    private produtoService: ProdutoService,
    private carrinhoEmissor: CarrinhoEmissor
  ) { }

  ngOnInit() {
    let idProduto = parseInt(this.activatedRoute.snapshot.paramMap.get('idProduto'));
    this.produtoId(idProduto);
  }

  public produtoId(id: number) {
    this.produtoService.selectId(id).subscribe((produtoApi) => {
      this.produto = produtoApi
    });
  }

  adicionaNoCarrinho() {
    this.carrinhoEmissor.add(this.produto);
  }

  removeDoCarrinho() {
    this.carrinhoEmissor.remove(this.produto);
  }

}
