import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-update-customer-component',
  templateUrl: './update-customer-component.component.html',
  styleUrls: ['./update-customer-component.component.css']
})
export class UpdateCustomerComponentComponent implements OnInit {
  customer:Customer;
  id:number;
  constructor(private route:ActivatedRoute,
    private router:Router,private customerService:CustomerService) { }

  ngOnInit() {
    this.customer=new Customer();
    this.id = this.route.snapshot.params['id'];
     this.customerService.getCustomerById(this.id)
     .subscribe(data=>{
       console.log(data)
       this.customer=data;
     },error=>console.log(error)
     );

  }
  
  onSubmit(){
    
     this.customerService.updateCustomer(this.id,this.customer)
     .subscribe(data=>console.log(data), error=>console.log(error));
     this.customer=new Customer();
     this.gotoList();
  }

   gotoList(){
     this.router.navigate(['/customers']);
   }


}
