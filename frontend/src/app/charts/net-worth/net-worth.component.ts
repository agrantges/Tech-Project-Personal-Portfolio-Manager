import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { SpringServiceService } from 'src/services/spring-service.service';


@Component({
  selector: 'app-net-worth',
  templateUrl: './net-worth.component.html',
  styleUrls: ['./net-worth.component.css']
})
export class NetWorthComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Total Net Worth' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  public data: any;
  public totalNet: number = 0;
  constructor(private springService:SpringServiceService) { }

  ngOnInit() {
    this.getNetWorth()
  }

  getNetWorth() {
    this.springService.getNetWorth().subscribe((data: any) => {
      console.log(data)
      this.totalNet = data[0];
      this.totalNet = Math.round(this.totalNet * 100) / 100;
    }, (err:any) => {
      console.log("entry not found")
    })
  }

  getData() {
    this.springService.getCash().subscribe((data: any) => {
      console.log(data)
      this.data = data;
    }, (err:any) => {
      console.log("entry not found")
    })
  }

 /*// events
 public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}*/

}
