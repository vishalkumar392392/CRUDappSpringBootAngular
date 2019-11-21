import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class CustomerService{
  
    private baseUrl = 'http://localhost:8080/vishal/app/customers';

    constructor(private http:HttpClient){

    }

    createCustomer(employee:object):Observable<Object>{

        return this.http.post(`${this.baseUrl}`,employee);
    }

    getCustomersList():Observable<any>{
        return this.http.get(`${this.baseUrl}`);
    }
    deleteCustomer(id: number):Observable<any> {
       return this.http.delete(`${this.baseUrl}/${id}`,{responseType:"text"})
      }

    getCustomerById(id:number):Observable<any>{
       return this.http.get(`${this.baseUrl}/${id}`);
    }

    updateCustomer(id:number,value:any):Observable<Object>{
        return this.http.put(`${this.baseUrl}/${id}`,value);
    }
    


}
