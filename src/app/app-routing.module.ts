import { RegistrationComponent } from './Common/registration/registration.component';
import { LoginPageComponent } from './admin/login-page/login-page.component';
import { ProductPageComponent } from './admin/product-page/product-page.component';
import { MainPageComponent } from './Common/main-page/main-page.component';
import { MainLayoutComponent } from './Common/shared/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './admin/dashboard-page/dashboard-page.component';
import { FormControl, FormGroup, Validators, Validator } from '@angular/forms';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: MainPageComponent},
      {path: 'product/:id', component: ProductPageComponent },
      {path: 'dashboard', component: DashboardPageComponent},
      {path: 'login', component: LoginPageComponent},
      {path: 'registration', component: RegistrationComponent}
    ]
  },
  {
    path: 'admin' , loadChildren: () => import('./admin/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
