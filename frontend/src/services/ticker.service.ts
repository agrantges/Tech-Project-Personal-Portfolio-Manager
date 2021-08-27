import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';          // HttpClient Service
import { Observable } from 'rxjs'                           // Observable returned from HttpClient methods

@Injectable({
  providedIn: 'root'
})


export class TickerService 
{

  private baseUrl = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols="
  private gainTickers = "JWN%2CGPS%2CAEO%2CBILL%2CARKG"
  private lossTickers = "DELL%2CPTON%2C%20FLWS%2CVMW%2CSAVA"
  private indicesTickers = "%5EGSPC%2C%5EDJI%2C%5ETNX%2CNQ%3DF"
  private requestHeaders = {"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com", "x-rapidapi-key": "795ef182cfmshb983455120db60cp15230cjsnb0aae839a913"}
  

  constructor(private http: HttpClient) { } 
  getGainersData(params={ticker:''})
  {
    return this.http.get(this.baseUrl + this.gainTickers, { headers: this.requestHeaders})
  }
  getLosersData(params={ticker:''})
  {
    return this.http.get(this.baseUrl + this.lossTickers, { headers: this.requestHeaders})
  }

  getIndicesData(params={ticker:''})
  {
    return this.http.get(this.baseUrl + this.indicesTickers, { headers: this.requestHeaders})
  }

}




