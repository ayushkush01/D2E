import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-intake',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './intake.component.html',
  styleUrls: ['./intake.component.scss']
})
export class IntakeComponent implements OnInit {

  cptRows = [
    { code: '', description: '' },
    { code: '', description: '' }
  ];

  docRows = [
    { title: '', type: '' },
    { title: '', type: '' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addCptRow() {
    this.cptRows.push({ code: '', description: '' });
  }

}
