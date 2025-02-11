import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post6Component } from './post6.component';

describe('Post6Component', () => {
  let component: Post6Component;
  let fixture: ComponentFixture<Post6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Post6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Post6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
