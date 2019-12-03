import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  apiURL: string = 'http://localhost:8001/admin/singup ';
 

  constructor(private http: HttpClient) { } 
  
  
  
  addHeros (hero): Observable<{}> {
    console.log(this.apiURL)
    return this.http.post(this.apiURL, hero, httpOptions);
  }


}
