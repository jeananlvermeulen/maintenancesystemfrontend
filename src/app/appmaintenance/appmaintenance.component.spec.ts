import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppmaintenanceComponent } from './appmaintenance.component';

describe('AppmaintenanceComponent', () => {
  let component: AppmaintenanceComponent;
  let fixture: ComponentFixture<AppmaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppmaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppmaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
