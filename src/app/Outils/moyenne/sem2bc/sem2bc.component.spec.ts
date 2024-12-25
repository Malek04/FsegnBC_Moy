import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sem2bcComponent } from './sem2bc.component';

describe('Sem2bcComponent', () => {
  let component: Sem2bcComponent;
  let fixture: ComponentFixture<Sem2bcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sem2bcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sem2bcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
