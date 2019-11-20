import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCustomerComponentComponent } from './delete-customer-component.component';

describe('DeleteCustomerComponentComponent', () => {
  let component: DeleteCustomerComponentComponent;
  let fixture: ComponentFixture<DeleteCustomerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCustomerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCustomerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
