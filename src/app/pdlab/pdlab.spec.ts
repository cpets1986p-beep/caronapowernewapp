import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pdlab } from './pdlab';

describe('Pdlab', () => {
  let component: Pdlab;
  let fixture: ComponentFixture<Pdlab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pdlab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pdlab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
