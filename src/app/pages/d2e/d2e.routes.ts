import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'activity',
    loadComponent: () =>
      import('./activity-board/activity-board.component').then(c => c.ActivityBoardComponent),
    data: { breadcrumb: 'Activity Board' }
  },
  {
    path: 'alerts',
    loadComponent: () =>
      import('./alerts-reports/alerts-reports.component').then(c => c.AlertsReportsComponent),
    data: { breadcrumb: 'Alerts & Reports' }
  },
  {
    path: 'providers',
    loadComponent: () =>
      import('./providers/providers.component').then(c => c.ProvidersComponent),
    data: { breadcrumb: 'Providers' }
  },
  {
    path: 'referral',
    loadComponent: () =>
      import('./referral-dashboard/referral-dashboard.component').then(c => c.ReferralDashboardComponent),
    data: { breadcrumb: 'Referral Dashboard' }
  },
  {
    path: 'documents',
    loadComponent: () =>
      import('./documents/documents.component').then(c => c.DocumentsComponent),
    data: { breadcrumb: 'Documents' }
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
    data: { breadcrumb: 'Dashboard' }
  },
  {
    path: 'hospital-systems',
    loadComponent: () =>
      import('./hospital-systems/hospital-systems.component').then(c => c.HospitalSystemsComponent),
    data: { breadcrumb: 'Hospital Systems' }
  },
  {
    path: 'clients',
    loadComponent: () =>
      import('./clients/clients.component').then(c => c.ClientsComponent),
    data: { breadcrumb: 'Clients' }
  },
  {
    path: 'patients',
    loadComponent: () =>
      import('./patients/patients.component').then(c => c.PatientsComponent),
    data: { breadcrumb: 'Patients' }
  },
  {
    path: 'appointments',
    loadComponent: () =>
      import('./appointments/appointments.component').then(c => c.AppointmentsComponent),
    data: { breadcrumb: 'Appointments' }
  },
  {
    path: 'intake',
    loadComponent: () =>
      import('./intake/intake.component').then(c => c.IntakeComponent),
    data: { breadcrumb: 'Intake' }
  },
  {
    path: '',
    redirectTo: 'activity',
    pathMatch: 'full'
  },
  {
    path: 'referral-2',
    loadComponent: () =>
      import('./referral-2/referral-2.component').then((c) => c.Referral2Component),
    data: { breadcrumb: 'Referral Dashboard 2' }
  },
];
