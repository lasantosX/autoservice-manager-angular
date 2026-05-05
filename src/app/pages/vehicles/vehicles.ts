import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { VehicleService } from '../../api/vehicle';
import { Vehicle } from '../../types/vehicle';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.html',
  styleUrl: './vehicles.css',
})
export class Vehicles implements OnInit {
  vehicles: Vehicle[] = [];
  loading = false;
  errorMessage = '';

  constructor(
    private vehicleService: VehicleService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadVehicles();
  }

  private loadVehicles(): void {
    this.loading = true;
    this.errorMessage = '';

    this.vehicleService
      .getVehiclesByCustomer(1)
      .pipe(
        finalize(() => {
          this.loading = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({
        next: (res) => {
          this.vehicles = res.items;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Error loading vehicles:', err);
          this.errorMessage = 'Unable to load vehicles.';
          this.cdr.detectChanges();
        },
      });
  }
}
