import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [CommonModule, NgxDatatableModule],
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {
  @ViewChild('actionsTemplate', { static: true }) actionsTemplate!: TemplateRef<any>;
  @ViewChild('statusTemplate', { static: true }) statusTemplate!: TemplateRef<any>;

  columns: any[] = [];

  ngOnInit() {
    this.columns = [
      { name: 'Actions', prop: 'actions', width: 120, sortable: false, cellTemplate: this.actionsTemplate },
      { name: 'Status', prop: 'status', width: 100, cellTemplate: this.statusTemplate },
      { name: 'Client Name', prop: 'clientName', width: 180 },
      { name: 'Client ID', prop: 'clientId', width: 120 },
      { name: 'Contracts', prop: 'contracts', width: 100 },
      { name: 'Contact', prop: 'contact', width: 150 },
      { name: 'Email', prop: 'email', width: 200 },
      { name: 'Work Phone', prop: 'workPhone', width: 140 },
      { name: 'Zip Code', prop: 'zipCode', width: 100 },
      { name: 'Cell Number', prop: 'cellNumber', width: 140 },
      { name: 'City', prop: 'city', width: 120 },
      { name: 'State', prop: 'state', width: 100 },
      { name: 'Created Date', prop: 'createdDate', width: 140 },
      { name: 'Modified Date', prop: 'modifiedDate', width: 140 }
    ];
  }

  rows = [
    {
      status: 'Active', clientName: 'Summit Healthcare', clientId: 'CLI-001', contracts: '3',
      contact: 'Dr. Jane Smith', email: 'jane.smith@summit.com', workPhone: '(555) 123-4567',
      zipCode: '90210', cellNumber: '(555) 987-6543', city: 'Beverly Hills', state: 'CA',
      createdDate: '2023-01-15', modifiedDate: '2023-08-22'
    },
    {
      status: 'Inactive', clientName: 'Riverside Clinic', clientId: 'CLI-002', contracts: '1',
      contact: 'John Doe', email: 'jdoe@riverside.org', workPhone: '(555) 222-3333',
      zipCode: '60601', cellNumber: '(555) 444-5555', city: 'Chicago', state: 'IL',
      createdDate: '2022-11-05', modifiedDate: '2023-09-10'
    },
    {
      status: 'Active', clientName: 'Valley Medical', clientId: 'CLI-003', contracts: '5',
      contact: 'Alice Johnson', email: 'alice.j@valley.med', workPhone: '(555) 777-8888',
      zipCode: '33101', cellNumber: '(555) 999-0000', city: 'Miami', state: 'FL',
      createdDate: '2023-05-20', modifiedDate: '2023-10-01'
    }
  ];
}
