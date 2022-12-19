import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreSecProyComponent } from './entre-sec-proy.component';

describe('EntreSecProyComponent', () => {
  let component: EntreSecProyComponent;
  let fixture: ComponentFixture<EntreSecProyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntreSecProyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntreSecProyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
