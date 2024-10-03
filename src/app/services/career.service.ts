import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const NAV_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class CareerService {


  constructor(private http: HttpClient) {}

  getAllCareerDetails(): Observable<any> {
    return this.http.get(`${NAV_URL}/carrer/getcarrerdetailsofall`);
  }

  downloadResume(careerId: number): Observable<Blob> {
    return this.http.get(`${NAV_URL}/carrer/download/${careerId}`, { responseType: 'blob' });
  }

  submitCareerDetails(formData: FormData): Observable<string> {
    return this.http.post(`${NAV_URL}/carrer/savecareerdetails`, formData, { responseType: 'text' });
  }
  

}
