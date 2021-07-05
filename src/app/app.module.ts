import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { EntregaComponent } from './entrega/entrega.component';
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component';
import { HomeComponent } from './home/home.component';
import { ROUTES } from './app.routes';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { ContainercircleComponent } from './containercircle/containercircle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    EntregaComponent,
    EstabelecimentoComponent,
    HomeComponent,
    CardComponent,
    ContainercircleComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
