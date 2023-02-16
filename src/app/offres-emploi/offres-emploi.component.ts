import { Component } from '@angular/core';
import { Emploi } from '../modele/Emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent {

  listeEmploi:Emploi[]=[
    {reference:"1",titre:"Dev_Java",entreprise:"telnet",etat:false},
    {reference:"2",titre:"Dev_Symfony",entreprise:"EY",etat:false},
    {reference:"3",titre:"Dev_DotNET",entreprise:"MohsenHolding",etat:true}
  ]
 num = 0;
  calculer(){
let i =0;
    this.listeEmploi.forEach(element => {
             if(element.etat==true)
             {
              i++;
             }
    });
    this.num=i;
  }

}
