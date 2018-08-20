import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { environment } from './../../../environments/environment';

@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) {}

  //filter services
  getCurrentShiftData(data) {
    return this.http.post(
      `${environment.API_URL}/shift/get-current-employee-shifts`,
      data
    )
  }
}
