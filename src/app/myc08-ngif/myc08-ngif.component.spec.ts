import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc08NgifComponent } from './myc08-ngif.component';

describe('Myc08NgifComponent', () => {
  let component: Myc08NgifComponent;
  let fixture: ComponentFixture<Myc08NgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc08NgifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myc08NgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
