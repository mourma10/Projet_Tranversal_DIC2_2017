import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {TradingServices} from '../trading/trading.service';
import {MarchandiseService} from '../marchandises/marchandises.service';
import {RepresentantServices} from '../representants/representants.service';
import {InstructionServices} from './instruction.service';

@Component({
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'icons.component.html',
    providers: [TradingServices, MarchandiseService, RepresentantServices,
        InstructionServices
    ]
})

export class IconsComponent implements OnInit {
    libelle: string;
    idRepresentant: number;
    idTypeMarchandise: number;
    quantite: number;
    typeMarchandises: TypeMarchandise[] = [];
    marchandises: Marchandise[] = [];
    representants: Representant[] = [];
    tradings: Trading[] = [];
    instructions: Instruction[] = [];
    tradingId: any;

    constructor(private activatedRoute: ActivatedRoute,
                private serviceMarchandise: MarchandiseService,
                private representantService: RepresentantServices,
                private instructionService: InstructionServices,
                private tradingServices: TradingServices) {
        this.tradingId = this.activatedRoute.snapshot.queryParams["tradingId"];
    }

    ngOnInit() {
        let self = this;
        this.tradingServices.listerTradings()
            .subscribe(tradings => {
                self.tradings = tradings;
            });
        this.serviceMarchandise.listerMarchandises()
            .subscribe(typeMarchandises => {
                self.typeMarchandises = typeMarchandises.items;
            });
        this.representantService.listerRepresentants()
            .subscribe(representants => {
                self.representants = representants.items;
            });
        /*this.instructionService.listerInstructions()
            .subscribe(instructions => {
                self.instructions = instructions;
            });*/
    }

    addMarchandise() {
        let march: Marchandise = {
            typeMarchandiseId: this.idTypeMarchandise,
            stock: this.quantite
        };
        this.marchandises.push(march);
    }

    ajouterInstruction() {
        let instruc: Instruction =
            {
                libelle: this.libelle,
                representantId: this.idRepresentant,
                marchandises: this.marchandises
            };
        this.instructions.push(instruc);
    }
}

interface TypeMarchandise {
    id?: number;
    libelle: string;
}

interface Marchandise {
    typeMarchandiseId: number;
    stock: number;
}

interface Representant {
    id?: number;
    nomRepresentant: string;
    prenomRepresentant: string;
    user: {
        username: string;
        email: string;
        roles?: any;
    };
    adresse: string;
    tel: string;
}

interface Trading {
    id?: number;
    libelle: string;
    transporteurId: number,
    dateDebut: Date;
    destination: string;
    marchandises: Marchandise[];
}

interface Instruction {
    conteneurId?: number;
    libelle: string;
    representantId: number;
    marchandises: Marchandise[];
}