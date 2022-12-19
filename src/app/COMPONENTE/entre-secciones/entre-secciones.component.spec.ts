import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreSeccionesComponent } from './entre-secciones.component';

describe('EntreSeccionesComponent', () => {
  let component: EntreSeccionesComponent;
  let fixture: ComponentFixture<EntreSeccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntreSeccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntreSeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
