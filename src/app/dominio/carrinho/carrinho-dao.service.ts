import { Produto } from './../produto/produto.model';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CarrinhoDaoService {

    set(produtos: Produto[]) {
        window.localStorage.setItem('carrinho', JSON.stringify(produtos));
    }

    get(): Produto[] {
        return JSON.parse(window.localStorage.getItem('carrinho'));
    }

    remove() {
        window.localStorage.removeItem('carrinho');
    }

    has(): boolean {
        return !!this.get();
    }

}