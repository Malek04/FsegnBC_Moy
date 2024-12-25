import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoyComponent } from './moy.component';

describe('MoyComponent', () => {
  let component: MoyComponent;
  let fixture: ComponentFixture<MoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
