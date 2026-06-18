import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';

@Component({
  selector: 'app-referral-2',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    FlexLayoutModule
  ],
  templateUrl: './referral-2.component.html',
  styleUrls: ['./referral-2.component.scss']
})
export class Referral2Component {
  public activeTab: string = 'Radar';
  
  public sidebarMenus = [
    { name: 'Radar', label: 'Radar' },
    { name: 'Plan of Care', label: 'Plan of Care (0)' },
    { name: 'Appointments', label: 'Appointments (0)' },
    { name: 'Notes', label: 'Notes (1)' },
    { name: 'Finance', label: 'Finance' },
    { name: 'Documents', label: 'Documents (2)' }
  ];

  public setTab(tabName: string) {
    this.activeTab = tabName;
  }
}
