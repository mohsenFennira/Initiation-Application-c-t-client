import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { TemplateDrivenForComponent } from './template-driven-for/template-driven-for.component';

const routes: Routes = [
  {path:"",redirectTo:"payment",pathMatch:"full"},
  {path:"offre",component:OffresEmploiComponent},
  {path:"article",component:ArticlesComponent},
  {path:"payment",component:TemplateDrivenForComponent},
  {path:"**",component:ArticlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
