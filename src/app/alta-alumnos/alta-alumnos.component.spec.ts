import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaAlumnosComponent } from './alta-alumnos.component';

describe('AltaAlumnosComponent', () => {
  let component: AltaAlumnosComponent;
  let fixture: ComponentFixture<AltaAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
