import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sem4biComponent } from './sem4bi.component';

describe('Sem4biComponent', () => {
  let component: Sem4biComponent;
  let fixture: ComponentFixture<Sem4biComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sem4biComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sem4biComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
