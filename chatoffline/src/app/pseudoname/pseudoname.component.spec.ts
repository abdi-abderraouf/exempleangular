import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PseudonameComponent } from './pseudoname.component';

describe('PseudonameComponent', () => {
  let component: PseudonameComponent;
  let fixture: ComponentFixture<PseudonameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PseudonameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PseudonameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
