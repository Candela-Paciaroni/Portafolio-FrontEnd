import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreSecEdComponent } from './entre-sec-ed.component';

describe('EntreSecEdComponent', () => {
  let component: EntreSecEdComponent;
  let fixture: ComponentFixture<EntreSecEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntreSecEdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntreSecEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
