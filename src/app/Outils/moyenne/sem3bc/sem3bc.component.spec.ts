import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sem3bcComponent } from './sem3bc.component';

describe('Sem3bcComponent', () => {
  let component: Sem3bcComponent;
  let fixture: ComponentFixture<Sem3bcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sem3bcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sem3bcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
