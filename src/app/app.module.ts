import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ViewContactComponent } from './components/view-contact/view-contact.component';
import { DeleteContactComponent } from './components/delete-contact/delete-contact.component';
import { CreateEditContactComponent } from './components/create-edit-contact/create-edit-contact.component';
import { SearchContactComponent } from './components/search-contact/search-contact.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TreeSelectModule} from 'primeng/treeselect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OverlayPanelModule } from 'primeng/overlaypanel';
import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ContactListComponent,
    ViewContactComponent,
    DeleteContactComponent,
    CreateEditContactComponent,
    SearchContactComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TreeSelectModule,
    
    ButtonModule,
    
    OverlayPanelModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
