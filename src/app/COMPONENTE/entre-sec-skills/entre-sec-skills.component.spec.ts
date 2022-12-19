import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreSecSkillsComponent } from './entre-sec-skills.component';

describe('EntreSecSkillsComponent', () => {
  let component: EntreSecSkillsComponent;
  let fixture: ComponentFixture<EntreSecSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntreSecSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntreSecSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
