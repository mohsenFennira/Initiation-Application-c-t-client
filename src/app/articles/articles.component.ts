import { Component, OnInit } from '@angular/core';
import { Article } from '../modele/Article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  ngOnInit(): void {
    let i=0;
       this.listeArticles.forEach(element => {
        if(element.categorue!="Travail")
        {
               i++;
        }
    });
      this.ar=i;
    }
  listeArticles:Article[]=[
    {titre:"Le championnat du monde",contenu:"le champion du monde de cette année est '",auteur:"Med Taher",date:"12/12/2002",categorue:"Sport"},
    {titre:"Comment écrire votre CV",contenu:"Pour réussir a décraucher un emploi '",auteur:"Marie Else",date:"02/04/2017",categorue:"Travail"}
  ]
  ar=0;
  aff(){
    let i=0;
       this.listeArticles.forEach(element => {
        if(element.categorue!="Travail")
        {
               i++;
        }
    });
      this.ar=i;
  }
}
