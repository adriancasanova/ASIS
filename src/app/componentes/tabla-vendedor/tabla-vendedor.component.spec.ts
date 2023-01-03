import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaVendedorComponent } from './tabla-vendedor.component';

describe('TablaVendedorComponent', () => {
  let component: TablaVendedorComponent;
  let fixture: ComponentFixture<TablaVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaVendedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
