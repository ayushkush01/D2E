import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [CommonModule, NgxDatatableModule],
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  @ViewChild('actionsTemplate', { static: true }) actionsTemplate!: TemplateRef<any>;
  @ViewChild('statusTemplate', { static: true }) statusTemplate!: TemplateRef<any>;

  columns: any[] = [];

  ngOnInit() {
    this.columns = [
      { name: 'Actions', prop: 'actions', width: 120, sortable: false, cellTemplate: this.actionsTemplate },
      { name: 'Patient ID', prop: 'patientId', width: 120 },
      { name: 'Patient Name', prop: 'patientName', width: 180 },
      { name: 'Client Name', prop: 'clientName', width: 180 },
      { name: 'Referral From', prop: 'referralFrom', width: 180 },
      { name: 'Date of Birth', prop: 'dob', width: 140 },
      { name: 'Phone Number', prop: 'phone', width: 140 },
      { name: 'Patient Email', prop: 'email', width: 200 },
      { name: 'Patient Address', prop: 'address', width: 200 },
      { name: 'Zip Code', prop: 'zipCode', width: 100 },
      { name: 'State Name', prop: 'state', width: 120 },
      { name: 'City Name', prop: 'city', width: 120 },
      { name: 'Summary', prop: 'summary', width: 250 }
    ];
  }

  rows = [
    {
      patientId: 'PT-1001', patientName: 'Elena Rodriguez', clientName: 'Summit Healthcare',
      referralFrom: 'Dr. Alan Mercer', dob: '1985-04-12', phone: '(555) 987-1234',
      email: 'elena.rodriguez@email.com', address: '123 Main St, Apt 4B', zipCode: '90001',
      state: 'California', city: 'Los Angeles', summary: 'Urgent referral for Cardiac follow-up.'
    },
    {
      patientId: 'PT-1002', patientName: 'Marcus Johnson', clientName: 'Riverside Clinic',
      referralFrom: 'Dr. Sarah Jenkins', dob: '1972-08-25', phone: '(555) 234-5678',
      email: 'mjohnson72@email.com', address: '456 Oak Avenue', zipCode: '60610',
      state: 'Illinois', city: 'Chicago', summary: 'Routine physical and lab work.'
    }
  ];
}
