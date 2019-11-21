import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer-component',
  templateUrl: './create-customer-component.component.html',
  styleUrls: ['./create-customer-component.component.css']
})
export class CreateCustomerComponentComponent implements OnInit {

  customer:Customer =new Customer();

  constructor( private customerService:CustomerService,
    private router: Router) { }

  ngOnInit() {
  }

  submit(){
    
    console.log(this.customer)
    this.customerService.createCustomer(this.customer)
      .subscribe(data=>console.log(data),error=>console.log(error));
     this.customer = new Customer();
     this.router.navigate(['/customers'])

  }
}
