import { Injectable } from '@angular/core';
import { Gainers } from '../app/market-movers/gainers/gainers'
import { HttpClient, HttpHeaders } from '@angular/common/http';          // HttpClient Service
import { Observable } from 'rxjs'                           // Observable returned from HttpClient methods

@Injectable({
  providedIn: 'root'
})


export class TickerService 
{
  /*
  requestOptions = new HttpHeaders()
    .set('x-rapidapi-host', 'apidojo-yahoo-finance-v1.p.rapidapi.com')
    .set('x-rapidapi-key', '795ef182cfmshb983455120db60cp15230cjsnb0aae839a912')
    */
   /*
  headers: new HttpHeaders(
    {
      "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      "x-rapidapi-key": "795ef182cfmshb983455120db60cp15230cjsnb0aae839a913"
    }
  )
  */

  private baseUrl = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols="
  

  constructor(private http: HttpClient) { } 
  getApiData(params={ticker:'AMD'})
  {
    return this.http.get(this.baseUrl + 'AMD', { headers: {"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com", "x-rapidapi-key": "795ef182cfmshb983455120db60cp15230cjsnb0aae839a913"}})
  }
}




