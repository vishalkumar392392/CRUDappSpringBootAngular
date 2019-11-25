import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserNameValidators } from './username-validator';

@Component({
  selector: 'app-create-customer-component',
  templateUrl: './create-customer-component.component.html',
  styleUrls: ['./create-customer-component.component.css']
})
export class CreateCustomerComponentComponent implements OnInit {

  form= new FormGroup({
    firstName : new FormControl("", [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(5),
      UserNameValidators.cannotContainSpaces
    ]),
    lastName : new FormControl("", [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(5),
      UserNameValidators.cannotContainSpaces
    ]),
    mobileNumber : new FormControl("", [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(5),
      UserNameValidators.cannotContainSpaces
    ]),

  })

  customer:Customer =new Customer();

  constructor( private customerService:CustomerService,
    private router: Router) { }

  ngOnInit() {
  }

  submit(){
    this.customer.firstName = this.form.value.firstName;
    this.customer.lastName = this.form.value.lastName;
    this.customer.mobileNumber = this.form.value.mobileNumber;
    console.log(this.customer)
    this.customerService.createCustomer(this.customer)
      .subscribe(data=>console.log(data),error=>console.log(error));
     this.customer = new Customer();
     this.router.navigate(['/customers'])

  }
}
