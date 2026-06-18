import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

interface KanbanCard {
  title: string;
  priority: 'high' | 'medium' | 'low' | 'none';
  assignees: string[];
  tag?: string;
  flagColor?: string;
}

interface KanbanColumn {
  name: string;
  count: number;
  cards: KanbanCard[];
}

@Component({
  selector: 'app-activity-board',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    MatCardModule, MatButtonModule, MatIconModule,
    MatFormFieldModule, MatInputModule, MatCheckboxModule,
    MatSelectModule, MatTooltipModule, DragDropModule
  ],
  templateUrl: './activity-board.component.html',
  styleUrls: ['./activity-board.component.scss']
})
export class ActivityBoardComponent {
  viewMode: 'board' | 'grid' = 'board';
  showArchives = false;
  activeTab = 0;
  searchClient = '';

  drop(event: CdkDragDrop<KanbanCard[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      // Recalculate column counts
      this.columns.forEach(col => col.count = col.cards.length);
    }
  }

  tabs = ['New Referrals', 'Active Referrals', 'Completed Referrals'];

  columns: KanbanColumn[] = [
    {
      name: 'Pending', count: 3, cards: [
        { title: 'New Patient Intake: Sarah Jenkins', priority: 'high', assignees: ['RK', 'NZ'], flagColor: '#ba1a1a', tag: 'URGENT' },
        { title: 'Review Medical History for Marcus Webb', priority: 'high', assignees: ['JD'], flagColor: '#ba1a1a' },
        { title: 'Insurance Verification: Aetna', priority: 'medium', assignees: [], tag: 'DUE TOMORROW' },
      ]
    },
    { 
      name: 'Information', count: 2, cards: [
        { title: 'Awaiting lab results (Bloodwork)', priority: 'none', assignees: ['SJ'], tag: 'WAITING' },
        { title: 'Follow up with primary care physician', priority: 'medium', assignees: ['RK'] },
      ] 
    },
    { 
      name: 'Quoting Price', count: 2, cards: [
        { title: 'Generate cost estimate for MRI', priority: 'high', assignees: ['FIN'], tag: 'FINANCE' },
        { title: 'Patient requested payment plan options', priority: 'none', assignees: ['FIN'] },
      ] 
    },
    { 
      name: 'Scheduling', count: 1, cards: [
        { title: 'Schedule initial consultation', priority: 'high', assignees: ['COORD'] },
      ] 
    },
    { 
      name: 'In Treatment', count: 2, cards: [
        { title: 'Routine therapy session (Week 2)', priority: 'medium', assignees: ['Dr. A'], tag: 'IN PROGRESS' },
        { title: 'Post-op checkup for knee replacement', priority: 'low', assignees: ['NURSE'] },
      ] 
    },
    { 
      name: 'Billing/Collections', count: 2, cards: [
        { title: 'Follow up on denied claim', priority: 'high', assignees: ['BILL'], tag: 'URGENT' },
        { title: 'Send invoice for Q2 services', priority: 'low', assignees: ['BILL'] },
      ] 
    },
    { 
      name: 'Completed', count: 2, cards: [
        { title: 'Discharge summary signed', priority: 'none', assignees: ['Dr. B'], tag: 'DONE' },
        { title: 'Final bill settled', priority: 'low', assignees: ['FIN'], tag: 'PAID' },
      ] 
    },
  ];

  // Filter state
  assignedRole = '';
  fromDate = '';
  toDate = '';
  filterPriority = false;
  filterFollowup = false;
  filterUrgent = true;
  filterOverdue = false;
  filterEscalate = false;

  setTab(i: number) { this.activeTab = i; }
  setView(mode: 'board' | 'grid') { this.viewMode = mode; }
  clearFilters() {
    this.assignedRole = '';
    this.fromDate = '';
    this.toDate = '';
    this.filterPriority = false;
    this.filterFollowup = false;
    this.filterUrgent = false;
    this.filterOverdue = false;
    this.filterEscalate = false;
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }
}
