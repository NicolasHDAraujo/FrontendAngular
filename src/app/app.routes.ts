import { Routes } from "@angular/router";
import { EntregaComponent } from "./entrega/entrega.component";
import { EstabelecimentoComponent } from "./estabelecimento/estabelecimento.component";
import { HomeComponent } from "./home/home.component";

export const ROUTES: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'entrega', component: EntregaComponent
  },
  {
    path: 'estabelecimento', component: EstabelecimentoComponent
  },
];
