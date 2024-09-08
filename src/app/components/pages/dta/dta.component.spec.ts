import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DTAComponent } from './dta.component';

describe('DTAComponent', () => {
  let component: DTAComponent;
  let fixture: ComponentFixture<DTAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DTAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DTAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
