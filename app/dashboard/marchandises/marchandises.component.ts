import {Component, OnInit} from '@angular/core';

import {MarchandiseService} from './marchandises.service';

@Component({
    moduleId: module.id,
    templateUrl: 'marchandises.component.html',
    providers: [MarchandiseService]
})

export class MarchandisesComponent implements OnInit {
    libelle: string;
    marchandises: Marchandise[] = [];

    constructor(private marchandiseService: MarchandiseService) {
    }

    ngOnInit() {
        let self = this;
        this.marchandiseService.listerMarchandises()
            .subscribe(marchandises => {
                self.marchandises = marchandises.items;
            });
    }

    ajouterMarchandise() {
        let self = this;
        this.marchandiseService.ajouterMarchandise(
            this.libelle)
            .subscribe(response => {
                let march: Marchandise = {
                    libelle: self.libelle,
                };
                self.marchandises.push(march);
            });

    }


}

interface Marchandise {
    id?:number;
    libelle: string;
}

