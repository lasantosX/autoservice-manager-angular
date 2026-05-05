import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ServiceOrderService } from '../../api/service-order';
import { ServiceOrder } from '../../types/service-order';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-service-orders',
  templateUrl: './service-orders.html',
  styleUrl: './service-orders.css',
})
export class ServiceOrders implements OnInit {
  serviceOrders: ServiceOrder[] = [];
  loading = false;
  errorMessage = '';

  constructor(
    private serviceOrderService: ServiceOrderService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadServiceOrders();
  }

  private loadServiceOrders(): void {
    this.loading = true;
    this.errorMessage = '';

    this.serviceOrderService
      .getServiceOrders()
      .pipe(
        finalize(() => {
          this.loading = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({
        next: (res) => {
          this.serviceOrders = res.items;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Error loading service orders:', err);
          this.errorMessage = 'Unable to load service orders.';
          this.cdr.detectChanges();
        },
      });
  }

  getStatusLabel(status: number): string {
    switch (status) {
      case 1:
        return 'Open';
      case 2:
        return 'In Progress';
      case 3:
        return 'Ready';
      case 4:
        return 'Closed';
      default:
        return 'Unknown';
    }
  }
}
