import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssainissementComponent } from './assainissement.component';

describe('AboutusComponent', () => {
  let component: AssainissementComponent;
  let fixture: ComponentFixture<AssainissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssainissementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssainissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
