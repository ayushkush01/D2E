import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // Chart Data
  forecastData = [
    {
      name: 'Predicted',
      series: [
        { name: '08:00', value: 300 },
        { name: '12:00', value: 400 },
        { name: '16:00', value: 550 },
        { name: '20:00', value: 450 },
        { name: '00:00', value: 600 },
        { name: '04:00', value: 800 }
      ]
    },
    {
      name: 'Actual',
      series: [
        { name: '08:00', value: 280 },
        { name: '12:00', value: 380 },
        { name: '16:00', value: 570 },
        { name: '20:00', value: 450 }
      ]
    }
  ];

  // Chart configuration
  showXAxis = true;
  showYAxis = false;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;
  autoScale = true;
  
  colorScheme: any = {
    domain: ['#a5c8ff', '#00478f'] // Predicted (light blue), Actual (dark blue)
  };

  // Units Data
  units = [
    { name: 'ER', value: '98%', status: 'critical' },
    { name: 'ICU-A', value: '82%', status: 'high' },
    { name: 'SURG', value: '45%', status: 'good' },
    { name: 'LAB', value: '76%', status: 'warning' },
    { name: 'OUTPATIENT', value: '62%', status: 'normal' },
    { name: 'ICU-B', value: '91%', status: 'high' },
    { name: 'PEDIATRICS', value: '54%', status: 'normal' },
    { name: 'ADMIN', value: '12%', status: 'normal' },
  ];

  // Events Feed
  events = [
    {
      title: 'Staffing Bottleneck: ER Unit',
      time: '2m ago',
      desc: 'AI predicts a nurse-to-patient ratio deficit in Floor 2 West within the next 45 minutes due to surge admissions.',
      icon: 'warning',
      type: 'critical'
    },
    {
      title: 'Supply Inventory Alert',
      time: '14m ago',
      desc: 'Surgical sterile pack stock levels are at 15% (Critical Low). Automatic re-order initiated via ERP system.',
      icon: 'assignment_turned_in',
      type: 'info'
    },
    {
      title: 'Compliance Audit Complete',
      time: '1h ago',
      desc: 'North Region monthly compliance check completed. Score: 98.6%. No significant findings reported.',
      icon: 'check_circle',
      type: 'success'
    }
  ];
}
