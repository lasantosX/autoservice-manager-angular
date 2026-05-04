import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../api/customer';
import { Customer } from '../../types/customer';
import { PagedResponse } from '../../types/paged';

@Component({
  selector: 'app-customers',
  imports: [CommonModule],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers implements OnInit {
  customers: Customer[] = [];
  loading = true;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe({
      next: (res: PagedResponse<Customer>) => {
        this.customers = res.items;
        this.loading = false;
      },
      error: (err: unknown) => {
        console.error(err);
        this.loading = false;
      },
    });
  }
}
