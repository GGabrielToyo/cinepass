import { Component, Input } from '@angular/core';
import { Filme } from 'src/app/models/Filme';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() filme?: Filme;
  modalAberto: boolean = false;

  public onModalChange(evento: boolean): void {
    this.modalAberto = evento;
  }

}
