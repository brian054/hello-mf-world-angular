import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },       // Default route (Home page)
    { path: 'contact', component: ContactComponent }
    //{ path: 'about', component: AboutComponent }  // About page
  ];
