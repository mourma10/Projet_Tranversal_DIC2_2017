import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TradingServices {
    public token: string;

    constructor(private http: Http) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    ajouterTrading(libelleTrading: string, idTransporteur: number, dateDebut: Date, destination: string, marchandises: any[]) {
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this.http.post('http://localhost:8000/api/conteneur', {
            transporteurId: idTransporteur,
            libelle: libelleTrading,
            dateDebut: dateDebut,
            destination: destination,
            marchandises: marchandises
        }, options)
            .map((response: Response) => {
                let token = response.json() && response.json().token;
                return !!token;
            });
    }

    listerTradings() {
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this.http.get('http://localhost:8000/api/conteneurs', options)
            .map((response: Response) => response.json());
    }

    /*infoTrading(tradingId:number){
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this.http.get('http://localhost:8000/api/conteneur/'+tradingId, options)
            .map((response: Response) => response.json());
    }*/
}
