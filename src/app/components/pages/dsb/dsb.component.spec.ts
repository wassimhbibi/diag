import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSBComponent } from './dsb.component';

describe('DSBComponent', () => {
  let component: DSBComponent;
  let fixture: ComponentFixture<DSBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DSBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DSBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
