import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarEvent, CalendarModule, CalendarView } from 'angular-calendar';
import { addHours, startOfDay } from 'date-fns';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule, CalendarModule],
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  columns: any[] = [];
  rows: any[] = [];
  viewMode: 'grid' | 'calendar' = 'grid';
  
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Week;
  events: CalendarEvent[] = [];

  setView(mode: 'grid' | 'calendar') {
    this.viewMode = mode;
  }

  ngOnInit() {
    this.columns = [
      { name: 'Actions', prop: 'actions' },
      { name: 'Appointment ID', prop: 'appointmentId' },
      { name: 'Patient ID', prop: 'patientId' },
      { name: 'Provider', prop: 'provider' },
      { name: 'Patient', prop: 'patient' },
      { name: 'Hospital', prop: 'hospital' },
      { name: 'CPT Code', prop: 'cptCode' },
      { name: 'Specialty', prop: 'specialty' },
      { name: 'Procedure', prop: 'procedure' },
      { name: 'Visit Type', prop: 'visitType' },
      { name: 'Date', prop: 'date' },
      { name: 'Time', prop: 'time' },
      { name: 'Phase', prop: 'phase' },
      { name: 'Stage', prop: 'stage' },
      { name: 'Remarks', prop: 'remarks' }
    ];

    this.rows = [
      {
        appointmentId: '10000043', patientId: '10000037', provider: 'matthew', patient: 'Ravi Prasad', hospital: 'medical city dallas',
        cptCode: '', specialty: '', visitType: 'In Patient', date: '09/29/2025', time: '', phase: 'New Referrals', stage: 'Information'
      },
      {
        appointmentId: '10000042', patientId: '10000038', provider: 'matthew', patient: 'kahu', hospital: 'medical city dallas',
        cptCode: '', specialty: 'Orthopedics', visitType: 'In Patient', date: '09/14/2025', time: '', phase: 'Completed Referrals', stage: 'Completed'
      },
      {
        appointmentId: '10000040', patientId: '10000035', provider: 'matthew', patient: 'Test patient1', hospital: 'medical city dallas',
        cptCode: 'SAS2W3S', specialty: 'Orthopedics', visitType: 'In Patient', date: '09/15/2025', time: '01:10 AM', phase: 'New Referrals', stage: 'Pending'
      }
    ];

    // Dummy events for the calendar
    this.events = [
      {
        start: addHours(startOfDay(new Date()), 9),
        end: addHours(startOfDay(new Date()), 10),
        title: 'Ravi Prasad',
        color: { primary: '#0284c7', secondary: '#e0f2fe' }
      },
      {
        start: addHours(startOfDay(new Date()), 11),
        end: addHours(startOfDay(new Date()), 12),
        title: 'Test patient1',
        color: { primary: '#15803d', secondary: '#dcfce7' }
      }
    ];
  }
}
