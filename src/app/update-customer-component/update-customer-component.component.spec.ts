import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomerComponentComponent } from './update-customer-component.component';

describe('UpdateCustomerComponentComponent', () => {
  let component: UpdateCustomerComponentComponent;
  let fixture: ComponentFixture<UpdateCustomerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCustomerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCustomerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
