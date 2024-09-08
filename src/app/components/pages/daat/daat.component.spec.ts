import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAATComponent } from './daat.component';

describe('DAATComponent', () => {
  let component: DAATComponent;
  let fixture: ComponentFixture<DAATComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DAATComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DAATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
