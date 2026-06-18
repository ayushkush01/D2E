import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface PhaseRow {
  phase: string;
  d1: number; d2: number; d3: number; d3plus: number;
}

interface AlertRow {
  status: 'Active' | 'Resolved';
  referralDate: string;
  phase: string;
  stage: string;
  client: string;
  patientName: string;
  dob: string;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-alerts-reports',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './alerts-reports.component.html',
  styleUrls: ['./alerts-reports.component.scss']
})
export class AlertsReportsComponent {
  searchQuery = '';
  currentPage = 1;
  totalPages = 12;

  phaseRows: PhaseRow[] = [
    { phase: 'Pending', d1: 0, d2: 0, d3: 0, d3plus: 4 },
    { phase: 'Information', d1: 0, d2: 0, d3: 0, d3plus: 0 },
    { phase: 'Quoting Price', d1: 0, d2: 0, d3: 0, d3plus: 0 },
    { phase: 'Scheduling', d1: 0, d2: 0, d3: 0, d3plus: 0 },
    { phase: 'Billing/Collections', d1: 0, d2: 0, d3: 0, d3plus: 0 },
    { phase: 'Completed', d1: 0, d2: 0, d3: 0, d3plus: 0 },
  ];

  alerts: AlertRow[] = [
    {
      status: 'Active', referralDate: '06/01/2026', phase: 'Pending', stage: 'New Referrals',
      client: 'Microsoft', patientName: 'Raj Kumar Malik', dob: '02/22/2016',
      phone: '435-364-7586', email: 'kushwahayush678@gmail.com'
    },
    {
      status: 'Active', referralDate: '05/30/2026', phase: 'Pending', stage: 'New Referrals',
      client: 'Aman', patientName: 'Jacob', dob: '06/14/2016',
      phone: '245-353-6456', email: 'kushwahayush678@gmail.com'
    },
    {
      status: 'Active', referralDate: '05/28/2026', phase: 'Information', stage: 'Follow-up',
      client: 'Google Healthcare', patientName: 'Sarah Jenkins', dob: '11/12/1985',
      phone: '801-456-1234', email: 's.jenkins@example.com'
    },
    {
      status: 'Active', referralDate: '05/25/2026', phase: 'Pending', stage: 'New Referrals',
      client: 'HealthNet', patientName: 'Marcus Webb', dob: '03/14/1979',
      phone: '702-889-5512', email: 'm.webb@healthnet.com'
    },
  ];

  get activeCount(): number { return this.alerts.filter(a => a.status === 'Active').length; }
  get resolvedCount(): number { return this.alerts.filter(a => a.status === 'Resolved').length; }

  prevPage() { if (this.currentPage > 1) this.currentPage--; }
  nextPage() { if (this.currentPage < this.totalPages) this.currentPage++; }
}
