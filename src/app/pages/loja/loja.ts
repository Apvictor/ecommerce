import { AvisoService } from './../../components/aviso/aviso.service';
import { ProdutoService } from './../../dominio/produto/produto.service';
import { Produto } from './../../dominio/produto/produto.model';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'page-loja',
  templateUrl: 'loja.html',
  styleUrls: ['./loja.scss'],
})
export class LojaPage implements OnInit {
  queryText = '';
  showSearchbar: boolean;

  produtos: Produto[] = [];

  constructor(
    private produtoService: ProdutoService,
    private avisoService: AvisoService,
  ) { }

  ngOnInit() {
    this.listaProdutos();
  }

  public listaProdutos() {
    this.produtoService.selectAll()
      .subscribe((produtosApi) => {
        this.produtos = produtosApi;
      }, (error: HttpErrorResponse) => {
        console.error(error);
        if (error.status == 400) this.avisoService.exibe('Contate o Suporte Técnico');
        else this.avisoService.exibe('Erro ao conectar no Servidor. Verifique sua Internet');
      });
  }
}
