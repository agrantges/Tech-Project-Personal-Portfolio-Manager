import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpringServiceService {

  private springURL: string;
  constructor(private http: HttpClient) { 
    this.springURL = "http://localhost:8080/accounts/all"
  }
  
  public findAll() {
    return this.http.get(this.springURL)
  }
}
