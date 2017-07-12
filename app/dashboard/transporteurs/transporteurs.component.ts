import { Component } from '@angular/core';

@Component({
    selector: 'transporteurs-cmp',
    moduleId: module.id,
    templateUrl: 'transporteurs.component.html'
})

export class TransporteursComponent {
    nom: string;
    prenom: string;
    email: string;
    telephone: string;

}

