import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer:Customer;
  id:number;
  constructor(private customerService:CustomerService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.customer=new Customer();
    this.id=this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id)
    .subscribe(data=>{
      this.customer = data;
      console.log(data);
    },error=>{console.log(error)})
    
  }
   back(){
     this.router.navigate(['customers'])
   }
}
