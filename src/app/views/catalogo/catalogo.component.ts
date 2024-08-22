import { Component } from '@angular/core';
import { Filme } from 'src/app/models/Filme';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent {

  constructor() { }

  listaFilmes: Filme[] = [
    new Filme("Filme 1", "Sinopse do Filme 1", "Ação", 120, "14:00, 18:00", "url1.jpg"),
    new Filme("Filme 2", "Sinopse do Filme 2", "Comédia", 90, "16:00, 20:00", "url2.jpg"),
    new Filme("Filme 3", "Sinopse do Filme 3", "Drama", 110, "15:00, 19:00", "url3.jpg"),
    new Filme("Filme 4", "Sinopse do Filme 4", "Terror", 100, "17:00, 21:00", "url4.jpg"),
    new Filme("Filme 5", "Sinopse do Filme 5", "Romance", 105, "13:00, 17:00", "url5.jpg")
  ];

}
