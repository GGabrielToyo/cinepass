import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaConstrucaoComponent } from './tela-construcao.component';

describe('TelaConstrucaoComponent', () => {
  let component: TelaConstrucaoComponent;
  let fixture: ComponentFixture<TelaConstrucaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaConstrucaoComponent]
    });
    fixture = TestBed.createComponent(TelaConstrucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
