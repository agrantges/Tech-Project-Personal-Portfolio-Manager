import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';          // HttpClient Service
import { Observable } from 'rxjs'                           // Observable returned from HttpClient methods

@Injectable({
  providedIn: 'root'
})


export class TickerService 
{

  private baseUrl = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols="
  private gainTickers = "AMD%2CIBM%2CJPM%2CC%2C6J%3DF"
  private lossTickers = "JWN%2CURBN%2CAEO%2CGPS%2CARKG"
  private indicesTickers = "%5EGSPC%2C%20%5EDJI%2C%20%5ETNX%2C%20VBMFX"
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




