import { CarrinhoDaoService } from './carrinho-dao.service';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Produto } from "../produto/produto.model";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CarrinhoEmissor {
    subject = new BehaviorSubject<Produto[]>(null);

    produtos: Produto[] = [];
    ultimoAdicionado: Produto;

    constructor(private carrinhoDAO: CarrinhoDaoService) {
        if (this.carrinhoDAO.has()) {
            this.produtos = this.carrinhoDAO.get();
            this.notifica();
        }
    }

    add(produto: Produto) {
        produto.carrinho = true;
        this.ultimoAdicionado = produto;
        let copiaLista = this.produtos.slice();
        copiaLista.push(produto);
        this.produtos = copiaLista;
        this.notifica();
    }

    get() {
        return this.subject.asObservable();
    }

    getTotal() {
        return this.subject.asObservable().pipe(
            map((produtos) => produtos ? produtos.length : 0)
        );
    }

    remove(produto: Produto) {
        produto.carrinho = false;
        let listaNova = this.produtos.filter((p) => p.id != produto.id);
        this.produtos = listaNova.slice();
        this.notifica();
    }

    private notifica() {
        this.carrinhoDAO.set(this.produtos);
        this.subject.next(this.produtos);
    }
}