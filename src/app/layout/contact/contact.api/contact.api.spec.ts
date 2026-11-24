import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactApi } from './contact.api';

describe('ContactApi', () => {
  let component: ContactApi;
  let fixture: ComponentFixture<ContactApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactApi],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
