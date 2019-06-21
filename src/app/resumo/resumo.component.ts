import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResumoService } from './resumo.service';

@Component({
    selector: 'app-resumo',
    templateUrl: './resumo.component.html',
    styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit, OnDestroy {

    resumo;
    inscricao;

    constructor(private resumoService: ResumoService) { }

    ngOnInit() {
        this.inscricao = this.resumoService.getResumo().subscribe(resumo => this.resumo = resumo);
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.inscricao.unsubscribe();
    }
}
