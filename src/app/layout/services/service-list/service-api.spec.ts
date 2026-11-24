import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceApi } from './service-api';

describe('ServiceApi', () => {
  let component: ServiceApi;
  let fixture: ComponentFixture<ServiceApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceApi],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
