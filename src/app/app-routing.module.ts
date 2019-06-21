import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ResumoComponent } from './resumo/resumo.component';
import { ConsultaComponent } from './consulta/consulta.component';

let routes = [
    { path: "resumo", component: ResumoComponent },
    { path: "consulta", component: ConsultaComponent },
    { path: "**", redirectTo: "/resumo" }
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
