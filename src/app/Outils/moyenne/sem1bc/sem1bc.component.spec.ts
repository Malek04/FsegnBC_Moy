import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sem1bcComponent } from './sem1bc.component';

describe('Sem1bcComponent', () => {
  let component: Sem1bcComponent;
  let fixture: ComponentFixture<Sem1bcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sem1bcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sem1bcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
