import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetials } from './service-detials';

describe('ServiceDetials', () => {
  let component: ServiceDetials;
  let fixture: ComponentFixture<ServiceDetials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDetials],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceDetials);
    fixture.componentRef.setInput('services_List', {
      title: 'Test Service',
      description: 'Test description',
      iconImg: 'icon.png',
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
