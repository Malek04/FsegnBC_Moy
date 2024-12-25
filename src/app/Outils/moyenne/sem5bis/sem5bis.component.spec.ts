import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sem5bisComponent } from './sem5bis.component';

describe('Sem5bisComponent', () => {
  let component: Sem5bisComponent;
  let fixture: ComponentFixture<Sem5bisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sem5bisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sem5bisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
