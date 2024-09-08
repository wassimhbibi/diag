import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DPATComponent } from './dpat.component';

describe('DPATComponent', () => {
  let component: DPATComponent;
  let fixture: ComponentFixture<DPATComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DPATComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DPATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
