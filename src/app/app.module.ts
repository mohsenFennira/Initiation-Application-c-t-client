import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccComponent } from './acc/acc.component';
import { FormsModule } from '@angular/forms';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { ArticlesComponent } from './articles/articles.component';
import { HeaderComponent } from './header/header.component';
import { TemplateDrivenForComponent } from './template-driven-for/template-driven-for.component';

@NgModule({
  declarations: [
    AppComponent,
    AccComponent,
    OffresEmploiComponent,
    ArticlesComponent,
    HeaderComponent,
    TemplateDrivenForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
