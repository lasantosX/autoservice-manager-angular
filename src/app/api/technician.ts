import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Technician } from '../types/technician';
import { PagedResponse } from '../types/paged';

@Injectable({
  providedIn: 'root',
})
export class TechnicianService {
  private baseUrl = 'https://localhost:44323/api';

  constructor(private http: HttpClient) {}

  getTechnicians() {
    return this.http.get<PagedResponse<Technician>>(
      `${this.baseUrl}/Technicians`
    );
  }
}
