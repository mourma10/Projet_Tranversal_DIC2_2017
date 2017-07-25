import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MarchandiseService {
    public token: string;

    constructor(private http: Http) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    ajouterMarchandise(libelle:string){
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this.http.post('http://localhost:8000/api/typeMarchandise', {libelle: libelle}, options)
            .map((response: Response) => {
            let token = response.json() && response.json().token;
            return !!token;
        });
    }


    listerMarchandises() {
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this.http.get('http://localhost:8000/api/typesmarchandises', options)
            .map((response: Response) => response.json());
    }
}