import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConsultaService } from './consulta.service';

@Component({
    selector: 'app-consulta',
    templateUrl: './consulta.component.html',
    styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit, OnDestroy {

    consultas;
    inscricao;
    erro;

    constructor(private consultaService: ConsultaService) { }

    ngOnInit() {
        this.inscricao = this.consultaService.getConsultas().subscribe(consultas => this.consultas = consultas, erro => this.erro = true);
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.inscricao.unsubscribe();
    }

}
