import {Component} from '@angular/core';
//import {AjouterRepresentantsService} from './ajouterRepresentants.service';

@Component({
    selector: 'representants-cmp',
    moduleId: module.id,
    templateUrl: 'representants.component.html'
})

export class RepresentantsComponent {
    nom: string;
    prenom: string;
    email: string;
    telephone: string;

    /*constructor(ajouterRepresentantService: AjouterRepresentantsService) {
    }*/


}
