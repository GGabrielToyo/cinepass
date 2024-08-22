import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './views/catalogo/catalogo.component';
import { TelaConstrucaoComponent } from './components/tela-construcao/tela-construcao.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {

    path: 'catalogo',
    component: CatalogoComponent
  },
  {
    path: 'tela-construcao',
    component: TelaConstrucaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
