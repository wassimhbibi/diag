import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DPAPTComponent } from './dpapt.component';

describe('DPAPTComponent', () => {
  let component: DPAPTComponent;
  let fixture: ComponentFixture<DPAPTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DPAPTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DPAPTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
