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

    constructor(private consultaService: ConsultaService) { }

    ngOnInit() {
        this.inscricao = this.consultaService.getConsultas().subscribe(consultas => this.consultas = consultas);
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.inscricao.unsubscribe();
    }

}
