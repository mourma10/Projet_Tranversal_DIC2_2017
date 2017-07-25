import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TradingServices} from './trading.service';
import {TransporteursServices} from '../transporteurs/transporteurs.service';
import {MarchandiseService} from '../marchandises/marchandises.service';

@Component({
    selector: 'trading-cmp',
    moduleId: module.id,
    templateUrl: 'trading.component.html',
    providers: [TradingServices]
})

export class TradingComponent implements OnInit {

    idTransporteur: number;
    dateDebut: Date;
    destination: string;
    idTypeMarchandise: number;
    transporteurs:Transporteur[] = [];
    quantite: number;
    libelleTrading: string;
    typeMarchandises: TypeMarchandise[] = [];
    marchandises:Marchandise[] = [];
    tradings: Trading[] = [];


    constructor(private router: Router, private serviceTradings: TradingServices,
    private serviceTransporteur:TransporteursServices, private serviceMarchandise:MarchandiseService) {
    }

    ngOnInit() {
        let self = this;
        this.serviceTransporteur.listerTransporteurs()
            .subscribe(transporteurs =>{
                self.transporteurs = transporteurs.items;
            });
        this.serviceMarchandise.listerMarchandises()
            .subscribe(typeMarchandises =>{
                self.typeMarchandises = typeMarchandises.items;
            });
           this.serviceTradings.listerTradings()
                    .subscribe(tradings => {
                        self.tradings = tradings.items;
                    });
    }

    detailTrading(trading: any) {
    }

    addMarchandise() {
        let march: Marchandise = {
            typeMarchandiseId: this.idTypeMarchandise,
            stock: this.quantite
        };
        this.marchandises.push(march);
    }

    ajouterTrading() {
        let self = this;
        this.serviceTradings.ajouterTrading(
            this.libelleTrading,
            this.idTransporteur,
            this.dateDebut,
            this.destination,
            this.marchandises
            )
        .subscribe(response =>{
            let trading: Trading = {
                libelle: self.libelleTrading,
                transporteurId: self.idTransporteur,
                dateDebut: self.dateDebut,
                destination: self.destination,
                marchandises: self.marchandises
            };
            this.tradings.push(trading);
        });
    }

    getTrading(tradingId:number){
        this.serviceTradings.infoTrading(tradingId)
            .subscribe(response =>{
                this.router.navigate(['/icons'], {queryParams:{tradingId:tradingId}});
            });
    }
}

interface TypeMarchandise {
    id?:number;
    libelle: string;
}

interface Marchandise {
    typeMarchandiseId:number;
    stock:number;
}

interface Trading {
    libelle: string;
    transporteurId: number,
    dateDebut: Date;
    destination: string;
    marchandises: Marchandise[];
}
interface Transporteur {
    id?: number;
    nomTransporteur: string;
    prenomTransporteur: string;
    user: {
        email: string;
        username: string;
        roles?: any;
    };
    adresse: string;
    telTransporteur: string;
}

