import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../types/vehicle';
import { PagedResponse } from '../types/paged';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private baseUrl = 'https://localhost:44323/api';

  constructor(private http: HttpClient) {}

  getVehiclesByCustomer(customerId: number) {
    return this.http.get<PagedResponse<Vehicle>>(
      `${this.baseUrl}/customers/${customerId}/vehicles`
    );
  }
}
