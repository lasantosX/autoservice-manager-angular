import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceOrder } from '../types/service-order';
import { PagedResponse } from '../types/paged';

@Injectable({
  providedIn: 'root',
})
export class ServiceOrderService {
  private baseUrl = 'https://localhost:44323/api';

  constructor(private http: HttpClient) {}

  getServiceOrders() {
    return this.http.get<PagedResponse<ServiceOrder>>(
      `${this.baseUrl}/ServiceOrders`
    );
  }
}
