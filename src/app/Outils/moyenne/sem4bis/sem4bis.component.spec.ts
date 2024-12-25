import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sem4bisComponent } from './sem4bis.component';

describe('Sem4bisComponent', () => {
  let component: Sem4bisComponent;
  let fixture: ComponentFixture<Sem4bisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sem4bisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sem4bisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
