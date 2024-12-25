import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sem4ebComponent } from './sem4eb.component';

describe('Sem4ebComponent', () => {
  let component: Sem4ebComponent;
  let fixture: ComponentFixture<Sem4ebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sem4ebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sem4ebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
