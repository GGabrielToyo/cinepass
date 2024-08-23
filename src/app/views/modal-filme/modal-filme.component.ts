import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Filme } from 'src/app/models/Filme';

const body = document.querySelector("body");

@Component({
  selector: 'app-modal-filme',
  templateUrl: './modal-filme.component.html',
  styleUrls: ['./modal-filme.component.scss']
})
export class ModalFilmeComponent {

  constructor() { }

  statusModal: boolean = true;
  @Input() filme?: Filme;
  @Output() mudouModal = new EventEmitter();

  fecharModal(): void {
    this.statusModal = false;
    this.mudouModal.emit(this.statusModal);
    if (!body) return;
    body.style.overflow = 'scroll';
  }

  esconderScroll(): void {
    if (this.statusModal == true && body) {
      body.style.overflow = 'hidden';
    }
  }

  comprarIngresso(): void {
    window.alert('Seguirá o fluxo de compra de ingressos');
    this.statusModal = false;
    this.mudouModal.emit(this.statusModal);
  }

}
