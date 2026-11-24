import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { ServiceDelete } from './service-delete';

describe('ServiceDelete', () => {
  let component: ServiceDelete;
  let fixture: ComponentFixture<ServiceDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDelete],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceDelete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
