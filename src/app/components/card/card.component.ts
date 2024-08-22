import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  modalAberto: boolean = false;

  public onModalChange(evento: boolean): void {

  }

}
