import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);

  baseURL = "https://localhost:5201/api/";

  login(creds: any){
    return this.http.post(this.baseURL + "account/login", creds);
  }

}
