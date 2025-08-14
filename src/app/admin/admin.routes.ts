import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonationsComponent } from './donations/donations.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { ContComponent } from './cont/cont.component';
import { NoteComponent } from './note/note.component';
import { AdminAuthGuard } from '../guards/admin-auth.guard'; 
import { CredentialsComponent } from '../credentials/credentials.component';

export const adminRoutes: Routes = [
  { path: 'admin-login', component: CredentialsComponent }, // login page
  {
    path: '',
    component: CredentialsComponent,
    canActivate: [AdminAuthGuard], // protect all admin pages
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'donations', component: DonationsComponent },
      { path: 'note', component: NoteComponent },
      { path: 'up', component: UpcomingComponent },
      { path: 'blo', component: BlogsComponent },
      { path: 'cont', component: ContComponent },
    ]
  }
];
