import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  // customers:Observable<Customer[]>;
  customers:Observable<Customer[]>;
  constructor(private customerService?:CustomerService,
    private router?:Router) { 
     
    }

  ngOnInit() {
   this.reloadData();
    
  }

  reloadData(){
    this.customers = this.customerService.getCustomersList();
  }
   deleteCustomer(id:number){
      this.customerService.deleteCustomer(id)
      .subscribe(data=>{
        console.log(data);
        this.reloadData();
      },
      error=>{console.log(error)});
   }

   updateCustomer(id:number){
    this.router.navigate(['update',id]);
   }
   customerDetails(id:number){
     this.router.navigate(['details',id])
   }


}
