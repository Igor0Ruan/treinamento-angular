import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class ResumoService {

    constructor(private http: HttpClient) { }

    getResumo() {
        return this.http.get(environment.apiUrl + "/resumo");
    }

}
