import { PseudonameComponent } from '../pseudoname/pseudoname.component';
export class Message {
  pseudo:string|null;
  date:number;
  texte?:string='';
  constructor(texte?:string)
  {
    this.pseudo=localStorage.getItem('pseudo');
    this.date=Date.now();
    this.texte=texte;
  }
}
