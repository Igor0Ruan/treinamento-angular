import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-consulta-por-especialidade',
  templateUrl: './consulta-por-especialidade.component.html',
  styleUrls: ['./consulta-por-especialidade.component.css']
})
export class ConsultaPorEspecialidadeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() consultas: any;
  @Input() titulo: string;
  @Input() erro: any;

}
