import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerComponentComponent } from './create-customer-component.component';

describe('CreateCustomerComponentComponent', () => {
  let component: CreateCustomerComponentComponent;
  let fixture: ComponentFixture<CreateCustomerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCustomerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
