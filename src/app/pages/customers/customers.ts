import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CustomerService } from '../../api/customer';
import { Customer } from '../../types/customer';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers implements OnInit {
  customers: Customer[] = [];
  loading = false;
  errorMessage = '';

  constructor(
    private customerService: CustomerService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  private loadCustomers(): void {
    this.loading = true;
    this.errorMessage = '';

    this.customerService
      .getCustomers()
      .pipe(
        finalize(() => {
          this.loading = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({
        next: (res) => {
          this.customers = res.items;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Error loading customers:', err);
          this.errorMessage = 'Unable to load customers.';
          this.cdr.detectChanges();
        },
      });
  }
}
