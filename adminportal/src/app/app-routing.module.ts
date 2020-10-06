import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthorizeGuard } from './services/auth.guard';

const routes: Routes = [{
  path: '',
  component: LoginComponent
}, {
  path: 'admin',
  component: AdminComponent,
  canActivate: [AuthorizeGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
