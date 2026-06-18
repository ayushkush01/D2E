import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  columns: any[] = [];
  rows: any[] = [];

  ngOnInit() {
    this.columns = [
      { name: 'Actions', prop: 'actions' },
      { name: 'Status', prop: 'status' },
      { name: 'Client Name', prop: 'clientName' },
      { name: 'Client ID', prop: 'clientId' },
      { name: 'Contracts', prop: 'contracts' },
      { name: 'Contact', prop: 'contact' },
      { name: 'Email', prop: 'email' },
      { name: 'Work Phone', prop: 'workPhone' },
      { name: 'Zip Code', prop: 'zipCode' },
      { name: 'Cell Number', prop: 'cellNumber' },
      { name: 'City', prop: 'city' },
      { name: 'State', prop: 'state' },
      { name: 'Created Date', prop: 'createdDate' },
      { name: 'Modified Date', prop: 'modifiedDate' }
    ];

    this.rows = [
      {
        status: 'Active', clientName: 'Pinnacle Personal Injury Firm', clientId: '10000047', contracts: '0',
        contact: 'Carlos Rivera', email: 'crivera@pinnacleinjury.com', workPhone: '345-767-5687',
        zipCode: '76667', cellNumber: '789-789-8985', city: 'San Diego', state: 'California',
        createdDate: '06/03/2026 10:00 AM', modifiedDate: '-'
      },
      {
        status: 'Active', clientName: 'MedFirst Hospital Network', clientId: '10000046', contracts: '0',
        contact: 'Sandra Nguyen', email: 's.nguyen@medfirst.org', workPhone: '973-447-6878',
        zipCode: '90809', cellNumber: '436-878-9087', city: 'Dallas', state: 'Texas',
        createdDate: '06/03/2026 09:45 AM', modifiedDate: '06/03/2026 09:59 AM'
      },
      {
        status: 'Active', clientName: 'Hartwell & Associates Law Group', clientId: '10000045', contracts: '0',
        contact: 'James Hartwell', email: 'james.hartwell@hartwelllaw.com', workPhone: '713-456-7890',
        zipCode: '77002', cellNumber: '713-987-6543', city: 'Dallas', state: 'Texas',
        createdDate: '06/03/2026 09:44 AM', modifiedDate: '-'
      }
    ];
  }
}
