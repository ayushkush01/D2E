import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-hospital-systems',
  standalone: true,
  imports: [CommonModule, NgxDatatableModule],
  templateUrl: './hospital-systems.component.html',
  styleUrls: ['./hospital-systems.component.scss']
})
export class HospitalSystemsComponent implements OnInit {
  @ViewChild('actionsTemplate', { static: true }) actionsTemplate!: TemplateRef<any>;
  @ViewChild('statusTemplate', { static: true }) statusTemplate!: TemplateRef<any>;

  columns: any[] = [];

  ngOnInit() {
    this.columns = [
      { name: 'Actions', prop: 'actions', width: 120, sortable: false, cellTemplate: this.actionsTemplate },
      { name: 'Status', prop: 'status', width: 100, cellTemplate: this.statusTemplate },
      { name: 'Hospital System ID', prop: 'systemId', width: 160 },
      { name: 'Hospital System', prop: 'systemName', width: 200 },
      { name: 'Hospitals', prop: 'hospitals', width: 100 },
      { name: 'Contact', prop: 'contact', width: 150 },
      { name: 'Specialities', prop: 'specialities', width: 200 },
      { name: 'Contract', prop: 'contract', width: 120 },
      { name: 'Address', prop: 'address', width: 200 },
      { name: 'City', prop: 'city', width: 120 },
      { name: 'State', prop: 'state', width: 100 },
      { name: 'Zip Code', prop: 'zipCode', width: 100 },
      { name: 'Main Phone', prop: 'mainPhone', width: 140 },
      { name: 'Fax', prop: 'fax', width: 140 },
      { name: 'Phone', prop: 'phone', width: 140 },
      { name: 'Created Date', prop: 'createdDate', width: 140 },
      { name: 'Modified Date', prop: 'modifiedDate', width: 140 }
    ];
  }

  rows = [
    {
      status: 'Active', systemId: 'HS-001', systemName: 'Mercy Health System', hospitals: '12',
      contact: 'Robert Green', specialities: 'Cardiology, Oncology', contract: 'Standard',
      address: '100 Medical Plaza', city: 'Boston', state: 'MA', zipCode: '02115',
      mainPhone: '(555) 100-2000', fax: '(555) 100-2001', phone: '(555) 100-2002',
      createdDate: '2022-04-12', modifiedDate: '2023-11-05'
    },
    {
      status: 'Pending', systemId: 'HS-002', systemName: 'Aurora Healthcare', hospitals: '8',
      contact: 'Sarah Davis', specialities: 'Pediatrics, Orthopedics', contract: 'Premium',
      address: '450 Health Way', city: 'Seattle', state: 'WA', zipCode: '98104',
      mainPhone: '(555) 300-4000', fax: '(555) 300-4001', phone: '(555) 300-4002',
      createdDate: '2023-01-20', modifiedDate: '2023-10-18'
    }
  ];
}
