import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DTGComponent } from './dtg.component';

describe('DTGComponent', () => {
  let component: DTGComponent;
  let fixture: ComponentFixture<DTGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DTGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DTGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
