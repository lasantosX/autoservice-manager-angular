import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../types/customer';
import { PagedResponse } from '../types/paged';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private baseUrl = 'https://localhost:44323/api';

  constructor(private http: HttpClient) {}

  getCustomers() {
    return this.http.get<PagedResponse<Customer>>(
      `${this.baseUrl}/Customers`
    );
  }
}
