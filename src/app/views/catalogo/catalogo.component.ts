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
    new Filme("DeadPool & Wolverine", "Wolverine está se recuperando quando cruza seu caminho com Deadpool. Juntos, eles formam uma equipe e enfrentam um inimigo em comum.", "Ação/Comédia", 127, "14:00, 18:00", "/assets/images/deadpool.jpg"),
    new Filme("Divertida Mente 2", "Com um salto temporal, Riley se encontra mais velha, passando pela tão temida adolescência. Junto com o amadurecimento, a sala de controle também está passando por uma adaptação para dar lugar a algo totalmente inesperado: novas emoções. As já conhecidas, Alegria, Raiva, Medo, Nojinho e Tristeza não têm certeza de como se sentir quando novos inquilinos chegam ao local.", "Infantil/Comédia", 96, "16:00, 20:00", "https://github.com/GGabrielToyo/cinepass/blob/main/src/assets/images/deadpool.jpg/assets/images/divertidamente2.jpg"),
    new Filme("Meu Malvado Favorito 4", "Gru dá as boas-vindas a um novo membro da família, Gru Jr., que pretende atormentar seu pai. No entanto, sua existência pacífica logo desmorona quando um mentor do crime escapa da prisão e jura vingança contra Gru.", "Infantil/Comédia", 94, "15:00, 19:00", "/assets/images/meumalvadofavorito4.jpg"),
    new Filme("O Corvo", "Na noite antes de seu casamento, o músico Eric Draven e sua noiva são brutalmente assassinados por membros de uma gangue violenta do centro da cidade. No aniversário da sua morte, Eric sai de sua sepultura e assume o manto gótico do Corvo, um vingador sobrenatural, rastreando os bandidos responsáveis pelo crime que os assassinaram impiedosamente. Eric finalmente confronta o líder gangster Top Dollar para completar sua missão macabra.", "Ação/Fantasia", 102, "17:00, 21:00", "/assets/images/ocorvo.jpg"),
    new Filme("HellBoy e o Homem Torto", "Sinopse do Filme 5", "Terror/Ação", "Aguardando Estreia", "13:00, 17:00", "/assets/images/hellboyeohomemtorto.jpg"),
    new Filme("Luccas e Gi em Dinossauros", "Luccas e Gi descobrem os planos de uma cientista ambiciosa e sem escrúpulos que quer trazer os dinossauros de volta à vida. Com a ajuda de um paleontólogo maluco e de dois agentes atrapalhados da CIA, Luccas corre contra o tempo para salvar sua irmã das garras da vilã, que planeja usar Gi como cobaia em suas terríveis experiências.", "Infantil/Aventura", 91, "13:00, 17:00", "/assets/images/luccasegiemdinossauros.jpg"),
  ];

}
