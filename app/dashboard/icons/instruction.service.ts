import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InstructionServices {
    public token: string;

    constructor(private http: Http) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    ajouterInstruction(tradingId, libelle, representantId, marchandises) {
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this.http.post('http://localhost:8000/api/instruction-livraison',
            {

                conteneurId: tradingId,
                libelle: libelle,
                representantId: representantId,
                marchandises: marchandises
            },
            options)
            .map((response: Response) => {
                let token = response.json() && response.json().token;
                return !!token;
            });
    }

    /*listerInstructions() {
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this.http.get('http://localhost:8000/api/instructionsLivraison', options)
            .map((response: Response) => response.json());
    }*/
}