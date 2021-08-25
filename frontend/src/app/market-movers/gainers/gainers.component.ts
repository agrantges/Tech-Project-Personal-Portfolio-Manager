import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gainers',
  templateUrl: './gainers.component.html',
  styleUrls: ['./gainers.component.css']
})
export class GainersComponent implements OnInit {
  //declare model data for this component
  gainerData = {symbol:'',regularMarketPrice:1.0}

  constructor() { }

  ngOnInit(): void {
  }

}
