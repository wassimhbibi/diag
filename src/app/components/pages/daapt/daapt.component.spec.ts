import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAAPTComponent } from './daapt.component';

describe('DAAPTComponent', () => {
  let component: DAAPTComponent;
  let fixture: ComponentFixture<DAAPTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DAAPTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DAAPTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
