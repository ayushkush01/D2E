import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Settings, SettingsService } from '@services/settings.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public form: FormGroup;
  public settings: Settings;
  public errorMsg: string = '';

  constructor(public settingsService: SettingsService, public fb: FormBuilder, public router: Router) {
    this.settings = this.settingsService.settings;
    this.form = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  public onSubmit(values: any): void {
    if (this.form.valid) {
      if (values.username === 'admin' && values.password === 'admin') {
        this.router.navigate(['/d2e/dashboard']);
      } else {
        this.errorMsg = 'Invalid username or password';
      }
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.settings.loadingSpinner = false;
    });
  }
}
