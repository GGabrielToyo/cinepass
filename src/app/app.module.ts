import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalFilmeComponent } from '../app/views/modal-filme/modal-filme.component';
import { CatalogoComponent } from './views/catalogo/catalogo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TelaConstrucaoComponent } from './components/tela-construcao/tela-construcao.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    ModalFilmeComponent,
    CatalogoComponent,
    TelaConstrucaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
