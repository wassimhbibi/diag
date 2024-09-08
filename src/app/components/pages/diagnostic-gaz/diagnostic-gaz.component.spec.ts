import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticgazComponent } from './diagnostic-gaz.component';

describe('BlogDetailsComponent', () => {
  let component: DiagnosticgazComponent;
  let fixture: ComponentFixture<DiagnosticgazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticgazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnosticgazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
