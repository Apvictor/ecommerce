import { CarrinhoEmissor } from './../carrinho/carrinho-emissor';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto.model';
import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {

    produtos: Produto[] = [];

    API = environment.urlApi;
    endpoint = 'produtos';

    constructor(
        private http: HttpClient,
        private carrinhoEmissor: CarrinhoEmissor
    ) { }

    selectAll(): Observable<Produto[]> {
        return combineLatest(
            this.http.get<Produto[]>(`${this.API}/${this.endpoint}`),
            this.carrinhoEmissor.get()
        ).pipe(
            map(([produtosApi, produtosCarrinho]) => {
                if (!produtosApi) return produtosApi;
                if (!produtosCarrinho) return produtosApi;
                return produtosApi.map((pA) => {
                    return this.preencheProdutoApiConformeProdutosDoCarrinho(pA, produtosCarrinho);
                })
            })
        );
    }

    selectId(id: number): Observable<Produto> {
        return combineLatest(
            this.http.get<Produto>(`${this.API}/${this.endpoint}/${id}`),
            this.carrinhoEmissor.get()
        ).pipe(
            map(([produtoApi, produtoCarrinho]) => {
                if (!produtoApi) return produtoApi;
                if (!produtoCarrinho) return produtoApi;
                return this.preencheProdutoApiConformeProdutosDoCarrinho(produtoApi, produtoCarrinho);
            })
        );
    }

    private preencheProdutoApiConformeProdutosDoCarrinho(produtoApi: Produto, produtoCarrinho: Produto[]) {
        produtoApi.carrinho = !!produtoCarrinho.find(pC => pC.id == produtoApi.id);
        return produtoApi;
    }

}