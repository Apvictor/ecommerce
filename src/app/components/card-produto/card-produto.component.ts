import { CarrinhoEmissor } from './../../dominio/carrinho/carrinho-emissor';
import { Router } from '@angular/router';
import { Produto } from './../../dominio/produto/produto.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'card-produto-app',
    templateUrl: 'card-produto.component.html',
    styleUrls: ['./card-produto.component.scss'],
})
export class CardProdutoComponent {
    @Input() produto: Produto;

    constructor(
        private router: Router,
        private carrinhoEmissor: CarrinhoEmissor
    ) { }

    ngOnInit() { }

    cliqueNoCarrinho(event: Event) {
        event.stopPropagation();
        this.carrinhoEmissor.add(this.produto);
    }

    cliqueNaLixeira(event: Event) {
        event.stopPropagation();
        this.carrinhoEmissor.remove(this.produto);
    }

    cliqueNoCard(event: Event) {
        this.router.navigate(['app', 'tabs', 'produto', this.produto.id]);
    }

}