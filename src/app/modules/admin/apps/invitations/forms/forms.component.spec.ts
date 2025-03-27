import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsDisponbiliteComponent } from './forms.component';

describe('FormsComponent', () => {
  let component: FormsDisponbiliteComponent;
  let fixture: ComponentFixture<FormsDisponbiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsDisponbiliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsDisponbiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
