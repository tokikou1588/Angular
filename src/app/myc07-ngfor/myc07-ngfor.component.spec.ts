import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc07NgforComponent } from './myc07-ngfor.component';

describe('Myc07NgforComponent', () => {
  let component: Myc07NgforComponent;
  let fixture: ComponentFixture<Myc07NgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc07NgforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myc07NgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
