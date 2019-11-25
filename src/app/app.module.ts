import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { CreateCustomerComponentComponent } from "./create-customer-component/create-customer-component.component";
import { UpdateCustomerComponentComponent } from "./update-customer-component/update-customer-component.component";
import { DeleteCustomerComponentComponent } from "./delete-customer-component/delete-customer-component.component";
import { WelcomeComponentComponent } from "./welcome-component/welcome-component.component";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerDetailsComponent } from "./customer-details/customer-details.component";
import{MatIconModule,MatButtonModule} from "@angular/material"
import{BrowserAnimationsModule} from "@angular/platform-browser/animations"
const routes: Routes = [
  { path: "", component: WelcomeComponentComponent },
  { path: "customers", component: CustomerListComponent },
  { path: "add", component: CreateCustomerComponentComponent },
  { path: "update/:id", component: UpdateCustomerComponentComponent },
  { path: "details/:id", component: CustomerDetailsComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponentComponent,
    UpdateCustomerComponentComponent,
    DeleteCustomerComponentComponent,
    WelcomeComponentComponent,
    CustomerListComponent,
    
    CustomerDetailsComponent
  ],
  imports: [BrowserModule,BrowserAnimationsModule, FormsModule,ReactiveFormsModule, RouterModule.forRoot(routes), HttpClientModule,MatIconModule,
  MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
