import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
//import initDemo = require('../../../assets/js/charts.js');
import {AjouterNoteDebitService} from './ajouternotedebit.service';

declare var $: any;

@Component({
    selector: 'home-cmp',
    moduleId: module.id,
    templateUrl: 'dashboardtransporteur.component.html'
})

export class DashboardTransporteurComponent {

    LibelleNote: string;
    MontantNote: string;
    notes : NoteDebit[]=[];

    constructor(ajouternotedebit: AjouterNoteDebitService) {
    }

    instruction() {
        this.router.navigate(['/dashboardtransporteur']);
    }

    addnotedeb(){
       let note: NoteDebit ={
          libelle: this.LibelleNote,
          montant: this.MontantNote
       };

       this.notes.push(note);
       console.log(note);
    }

    supprimernotedebit(i){
      this.notes.splice(i,1);
      console.log(i+" supprimée");
    }

}

interface NoteDebit{
    libelle: string;
    montant: string;
}
