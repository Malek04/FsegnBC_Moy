import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sem5ebComponent } from './sem5eb.component';

describe('Sem5ebComponent', () => {
  let component: Sem5ebComponent;
  let fixture: ComponentFixture<Sem5ebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sem5ebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sem5ebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
