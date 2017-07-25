
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardRepresentantServices {
    public token: string;

    constructor(private http: Http) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    ajouterClient(nomClient: string, prenomClient: string, email: string, adresse: string, telephone: string) {
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this.http.post('',
            {
                representant: {
                    nomClient: nomClient,
                    prenomClient: prenomClient,
                    adresse: adresse,
                    tel: telephone
                },
                user: {
                    email: email,
                    username: email
                }
            },
            options)
            .map((response: Response) => {
                let token = response.json() && response.json().token;
                return !!token;
            });
    }

    ajouterOrdreDeLivraison(userId: number, clientId: number, idMarInstructionLivr: number, stock:number) {
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this.http.post('',
            {
                userId:userId,
                clientId:clientId,
                InfoMarOrdreDeLivraison: [
                    {
                        infosMarInstructionLivrId: idMarInstructionLivr,
                        stock:stock
                    }
                ]
            },
            options)
            .map((response: Response) => {
                let token = response.json() && response.json().token;
                return !!token;
            });
    }

    listerMarInstructionLivraison(){
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this.http.get('', options)
            .map((response: Response) => response.json());
    }

    listerRepresentants() {
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this.http.get('', options)
            .map((response: Response) => response.json());
    }
}
