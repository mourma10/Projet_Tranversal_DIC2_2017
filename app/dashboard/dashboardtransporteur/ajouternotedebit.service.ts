import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AjouterNoteDebitService{

    public token: string;

    constructor(private http: Http){
        var currentuser= JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentuser && currentuser.token;
    }

    ajouternotedebit(libelle:string, montant:string){

        let headers= new Headers({'Authorization': 'Bearer ' + this.token});
        let options= new RequestOptions({headers: headers});
        return this.http.post('', JSON.stringify({

            notedebit:{
                libelle:libelle,
                montant: montant

            }

        }),
        options)
        .map((response: Response) =>{
            let token=response.json() && response.json().token;
            return !!token
        });

    }

    listernotesdebit(){
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this.http.get('', options)
            .map((response: Response) => response.json());
    }
}