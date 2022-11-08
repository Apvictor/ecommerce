import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'avaliacao-app',
    templateUrl: 'avaliacao.component.html',
    styleUrls: ['./avaliacao.component.scss'],
})
export class AvaliacaoComponent implements OnInit, OnChanges {
    @Input() avaliacao: number;

    avaliacoes: boolean[] = [true, true, true, false, false];

    constructor() { }

    ngOnInit() {
        this.preencheAvaliacao(this.avaliacao);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.avaliacao) {
            this.preencheAvaliacao(changes.avaliacao.currentValue);
        }
    }

    preencheAvaliacao(avaliacao: number) {
        this.avaliacoes = this.avaliacoes.map((a, i) => i + 1 <= avaliacao);
    }
}