import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { CreateEditContactComponent } from './components/create-edit-contact/create-edit-contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeleteContactComponent } from './components/delete-contact/delete-contact.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ViewContactComponent } from './components/view-contact/view-contact.component';

const routes: Routes = [
  {path: '', component: DashboardComponent },
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'create', component: CreateEditContactComponent},
  {path: 'delete', component: DeleteContactComponent},
  {path: 'view', component: ViewContactComponent},
  {path: 'contacts', component: ContactListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
