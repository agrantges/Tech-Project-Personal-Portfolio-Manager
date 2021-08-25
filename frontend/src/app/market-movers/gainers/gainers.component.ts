import { Component, OnInit } from '@angular/core';
import { TickerService } from '../../../services/ticker.service';

@Component({
  selector: 'app-gainers',
  templateUrl: './gainers.component.html',
  styleUrls: ['./gainers.component.css']
})
export class GainersComponent implements OnInit {
  //declare model data for this component
  gainerData = {region:'US',symbol:'',shortName:'', regularMarketPrice:1.0, regularMarketChangePercent:2.0}
  paramObj = {ticker:'AMD'}

constructor(private tickerService:TickerService) { }

  ngOnInit(): void {
  }

  makeTickerServiceCall()
  {
    this.tickerService.getApiData(this.paramObj)
      .subscribe( (data:any) =>
      {
        console.log(data)
        this.gainerData = data
      },
      (err:any) =>
      {
        //404 
        console.log("entry not found")
        this.gainerData = {region:'US',symbol:'null',shortName:'null',regularMarketPrice:0.0,regularMarketChangePercent:0.0}
      }
      )
  }

}