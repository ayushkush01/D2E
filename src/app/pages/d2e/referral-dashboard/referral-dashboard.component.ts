import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';

interface Milestone {
  title: string;
  time: string;
  description: string;
  status: 'complete' | 'active' | 'pending';
  icon: string;
}

@Component({
  selector: 'app-referral-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  templateUrl: './referral-dashboard.component.html',
  styleUrls: ['./referral-dashboard.component.scss']
})
export class ReferralDashboardComponent {
  public activeTab: string = 'Overview';

  public setTab(tabName: string) {
    this.activeTab = tabName;
  }
  
  patient = {
    name: 'Elena Rodriguez',
    avatar: 'assets/img/users/user2.jpg', // Placeholder for female avatar, or can use an icon
    tags: [
      { label: 'HIGH PRIORITY', class: 'tag-high-priority' },
      { label: 'URGENT REFERRAL', class: 'tag-urgent' }
    ],
    mrn: '#44920-X',
    dob: 'May 12, 1978 (46Y)',
    gender: 'Female',
    location: 'Chicago, IL',
    phone: '(312) 555-0192'
  };

  clinicalProfile = {
    diagnosis: {
      primary: 'Chronic Kidney Disease (Stage 3)',
      secondary: 'Hypertension, Type 2 Diabetes'
    },
    coverage: {
      primary: 'BlueCross BlueShield Platinum',
      policy: 'BCB-99812-9011'
    },
    vitals: {
      bp: { value: '138/88', trend: 'up' },
      spo2: { value: '98%', trend: 'none' },
      hr: { value: '72 bpm', trend: 'none' },
      bmi: { value: '28.4', trend: 'none' }
    },
    team: {
      pcp: 'Dr. Alan Mercer',
      clinic: 'Northshore Nephrology',
      manager: 'Sarah Jenkins, RN',
      language: 'English, Spanish'
    }
  };

  milestones: Milestone[] = [
    {
      title: 'Referral Received',
      time: 'Oct 24, 09:12 AM',
      description: 'Initial documentation confirmed by Dr. Alan Mercer.',
      status: 'complete',
      icon: 'check'
    },
    {
      title: 'Insurance Verification',
      time: 'Oct 24, 02:45 PM',
      description: 'Auth #PR-9921 pending BCBS response. Priority escalated.',
      status: 'active',
      icon: 'autorenew'
    },
    {
      title: 'Clinical Review Scheduled',
      time: 'Est: Oct 25, 10:00 AM',
      description: 'Assigned to: Medical Director',
      status: 'pending',
      icon: 'schedule'
    }
  ];

  subNavigation = [
    { label: 'Patient Summary', icon: 'badge', active: true },
    { label: 'Current Medications', icon: 'medical_services', active: false },
    { label: 'Allergies & Alerts', icon: 'emergency', active: false },
    { label: 'Risk Stratification', icon: 'leaderboard', active: false },
    { label: 'Family Connections', icon: 'family_restroom', active: false }
  ];

  alerts = [
    'Missing latest metabolic panel (required for referral closure).',
    'Last BP reading was significantly above patient baseline.'
  ];
}
