import {Component} from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';


@Component({
    selector: 'trading-cmp',
    moduleId: module.id,
    templateUrl: 'trading.component.html'
})

export class TradingComponent {

    trading = 'tradingo123';
    nomTransporteur:string;
    dateDebut:Date;
    destination:string;
    libelleMarchandise:string;
    quantite: number;
    libelleTrading:string;
    marchandises:Marchandise[] = [];
    tradings: Trading[] = [];


    constructor(private router: Router) {
    }

    instruction() {

        this.router.navigate(['/icons'], {queryParams: {trading: this.trading}});
    }

        this.router.navigate(['/icons']);
    }
    addMarchandise(){
        let march: Marchandise = {
            libelleMarchandise: this.libelleMarchandise,
            quantite: this.quantite
        };
        this.marchandises.push(march);
        console.log(march.libelleMarchandise);
    }

    ajouterTrading(){
       //Appel Fonction service
        let trading : Trading = {
            libelleTrading:this.libelleTrading,
            nomTransporteur:this.nomTransporteur,
            dateDebut:this.dateDebut,
            destination:this.destination,
            marchandises:this.marchandises
        };
        this.tradings.push(trading);
    }
}

interface Marchandise{
    libelleMarchandise:string;
    quantite:number;
}

interface Trading{
    libelleTrading:string;
    nomTransporteur:string,
    dateDebut:Date;
    destination:string;
    marchandises: Marchandise[];
}
