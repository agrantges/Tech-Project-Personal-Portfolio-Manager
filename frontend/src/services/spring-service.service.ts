import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpringServiceService {

  private springURL: string;
  constructor(private http: HttpClient) { 
    this.springURL = "http://localhost:8080/accounts/"
  }
  
  public getAccounts() {
    return this.http.get(this.springURL + "all")
  }

  public getValues() {
    return this.http.get(this.springURL + "values")
  }

  public getNetWorth() {
    return this.http.get(this.springURL + "networth")
  }

  public getCash() {
    return this.http.get(this.springURL + "cash")
  }

  public getInvestment() {
    return this.http.get(this.springURL + "investment")
  }
}
