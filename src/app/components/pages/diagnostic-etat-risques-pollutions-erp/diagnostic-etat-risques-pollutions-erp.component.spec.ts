import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticetatrisquespollutionserpComponent } from './diagnostic-etat-risques-pollutions-erp.component';

describe('BlogDetailsComponent', () => {
  let component: DiagnosticetatrisquespollutionserpComponent;
  let fixture: ComponentFixture<DiagnosticetatrisquespollutionserpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticetatrisquespollutionserpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnosticetatrisquespollutionserpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
