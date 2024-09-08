import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DTATComponent } from './dtat.component';

describe('DTATComponent', () => {
  let component: DTATComponent;
  let fixture: ComponentFixture<DTATComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DTATComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DTATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
