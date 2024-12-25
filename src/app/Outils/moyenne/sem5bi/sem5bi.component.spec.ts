import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sem5biComponent } from './sem5bi.component';

describe('Sem5biComponent', () => {
  let component: Sem5biComponent;
  let fixture: ComponentFixture<Sem5biComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sem5biComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sem5biComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
