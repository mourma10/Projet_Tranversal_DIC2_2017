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

    /**
	C'est bon maintenant la fonction doit avoir compte entete:
		ajouterTrading(trading:any)
	Et remplacer la partie JSON.stringify(...) par seulement trading(trading est deja sous format Json)
    **/

    ajouterTrading(libelleTrading: string, destinationTrading: string, datedebut: string, transporteur: string,
                   representant:string,libellemarchandise: string[],qtemarchandise: string) {
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this.http.post('', JSON.stringify(
            {
                trading: {
                    libelleTrading: libelleTrading,
                    destinationTrading: destinationTrading,
                    datedebut: datedebut,
                    transporteur: transporteur,
                    representant: representant,
                    libellemarchandise: libellemarchandise,
                    qtemarchandise: qtemarchandise
                }
            }),
            options)
            .map((response: Response) => {
                let token = response.json() && response.json().token;
                return !!token;
            });
    }

    listerTradings() {
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this.http.get('', options)
            .map((response: Response) => response.json());
    }
}
