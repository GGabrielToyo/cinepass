import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFilmeComponent } from './modal-filme.component';

describe('ModalFilmeComponent', () => {
  let component: ModalFilmeComponent;
  let fixture: ComponentFixture<ModalFilmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalFilmeComponent]
    });
    fixture = TestBed.createComponent(ModalFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
