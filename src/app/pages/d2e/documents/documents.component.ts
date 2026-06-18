import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DocumentRow {
  name: string;
  type: string;
  patient: string;
  id: string;
  admin: string;
  date: string;
  size: string;
  icon: string;
}

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {
  viewMode: 'card' | 'list' = 'card';

  setView(mode: 'card' | 'list') {
    this.viewMode = mode;
  }

  documents: DocumentRow[] = [
    { name: 'Medical Record', type: 'PDF', patient: 'Jacob', id: 'Xgadfvhdfn', admin: 'Dr. Smith', date: '05/29/2026', size: '2.4 MB', icon: 'description' },
    { name: 'Imaging (Chest X-Ray)', type: 'Image', patient: 'Akshay K', id: 'RAD-99212', admin: 'Nurse Joy', date: '05/28/2026', size: '8.1 MB', icon: 'image' },
    { name: 'Referral Form', type: 'PDF', patient: 'Priya Sharma', id: 'REF-0021-B', admin: 'John Doe', date: '05/27/2026', size: '1.2 MB', icon: 'picture_as_pdf' },
    { name: 'Lab Results', type: 'Folder', patient: 'Zahir Abbas', id: 'LAB-8871', admin: 'Lab Tech A', date: '05/26/2026', size: '4.5 MB', icon: 'folder' }
  ];
}
