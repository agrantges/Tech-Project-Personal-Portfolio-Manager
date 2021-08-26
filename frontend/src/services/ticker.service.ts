import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';          // HttpClient Service
import { Observable } from 'rxjs'                           // Observable returned from HttpClient methods

@Injectable({
  providedIn: 'root'
})


export class TickerService 
{

  private baseUrl = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols="
  

  constructor(private http: HttpClient) { } 
  getGainersData(params={ticker:'AMD'})
  {
    return this.http.get(this.baseUrl + 'AMD%2CIBM%2CJPM%2CC%2CFB', { headers: {"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com", "x-rapidapi-key": "795ef182cfmshb983455120db60cp15230cjsnb0aae839a913"}})
  }
  getLosersData(params={ticker:'AMD'})
  {
    return this.http.get(this.baseUrl + 'JWN%2CURBN%2CAEO%2CGPS%2CGME', { headers: {"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com", "x-rapidapi-key": "795ef182cfmshb983455120db60cp15230cjsnb0aae839a913"}})
  }

  getIndicesData(params={ticker:'AMD'})
  {
    return this.http.get(this.baseUrl + '%5EGSPC%2C%20%5EDJI%2C%20%5ETNX%2C%20VBMFX', { headers: {"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com", "x-rapidapi-key": "795ef182cfmshb983455120db60cp15230cjsnb0aae839a913"}})
  }
}




