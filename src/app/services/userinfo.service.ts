import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const NAV_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

 
  constructor(private http : HttpClient) { }
 
 
  saveUserInfo(userInfo: any): Observable<any> {
    return this.http.post<any>(`${NAV_URL}/userinfo/saveuserinfo`,userInfo);
  }


  getAllUserInfo(): Observable<any> {
    return this.http.get(`${NAV_URL}/userinfo/getalluserinfo`);
  }
}