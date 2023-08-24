import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {OrdersComponent} from "./orders.component";


const routes: Routes = [
  {
    path: '',
    component: OrdersComponent
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  declarations:[OrdersComponent],
  exports:[RouterModule]
})
export default class OrdersModule {

}
