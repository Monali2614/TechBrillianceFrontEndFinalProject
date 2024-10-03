import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareeruserComponent } from './careeruser.component';

describe('CareeruserComponent', () => {
  let component: CareeruserComponent;
  let fixture: ComponentFixture<CareeruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareeruserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareeruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
