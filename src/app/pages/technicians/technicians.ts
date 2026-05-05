import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TechnicianService } from '../../api/technician';
import { Technician } from '../../types/technician';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-technicians',
  templateUrl: './technicians.html',
  styleUrl: './technicians.css',
})
export class Technicians implements OnInit {
  technicians: Technician[] = [];
  loading = false;
  errorMessage = '';

  constructor(
    private technicianService: TechnicianService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadTechnicians();
  }

  private loadTechnicians(): void {
    this.loading = true;
    this.errorMessage = '';

    this.technicianService
      .getTechnicians()
      .pipe(
        finalize(() => {
          this.loading = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({
        next: (res) => {
          this.technicians = res.items;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Error loading technicians:', err);
          this.errorMessage = 'Unable to load technicians.';
          this.cdr.detectChanges();
        },
      });
  }
}
