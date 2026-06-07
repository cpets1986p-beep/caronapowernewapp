import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpulseGeneratorSpares } from './impulse-generator-spares';

describe('ImpulseGeneratorSpares', () => {
  let component: ImpulseGeneratorSpares;
  let fixture: ComponentFixture<ImpulseGeneratorSpares>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpulseGeneratorSpares]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpulseGeneratorSpares);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
