import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRecepcionComponent } from './tabla-recepcion.component';

describe('TablaRecepcionComponent', () => {
  let component: TablaRecepcionComponent;
  let fixture: ComponentFixture<TablaRecepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaRecepcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaRecepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
