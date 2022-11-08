import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class EcommerceDadosService {

    endereco: string = 'R. Guia Lopes, 4201 - Canudos, Novo Hamburgo';
    telefone: string = '5511995052373';

    getEndereco() {
        return this.endereco;
    }

    getTelefone() {
        return this.telefone;
    }

}