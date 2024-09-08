import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticamianteComponent } from './diagnostic-amiante.component';

describe('BlogDetailsComponent', () => {
  let component: DiagnosticamianteComponent;
  let fixture: ComponentFixture<DiagnosticamianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticamianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnosticamianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
