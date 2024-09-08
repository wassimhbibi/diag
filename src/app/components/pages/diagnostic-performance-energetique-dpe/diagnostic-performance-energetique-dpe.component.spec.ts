import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticperformanceenergetiquedpeComponent } from './diagnostic-performance-energetique-dpe.component';

describe('BlogDetailsComponent', () => {
  let component: DiagnosticperformanceenergetiquedpeComponent;
  let fixture: ComponentFixture<DiagnosticperformanceenergetiquedpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticperformanceenergetiquedpeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnosticperformanceenergetiquedpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
