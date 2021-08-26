import { Component, OnInit } from '@angular/core';
import { SpringServiceService } from 'src/services/spring-service.service';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})
export class CashComponent implements OnInit {
  public isCollapsed = false;
  constructor(private springService:SpringServiceService) { }

  ngOnInit(): void {
  }

  getAllAccounts() {
    this.springService.getAccounts().subscribe((data: any) => {
      console.log(data)
    }, (err:any) => {
      console.log("entry not found")
    })
  }

  getAllValues() {
    this.springService.getValues().subscribe((data: any) => {
      console.log(data)
    }, (err:any) => {
      console.log("entry not found")
    })
  }

  getAllNetWorth() {
    this.springService.getNetWorth().subscribe((data: any) => {
      console.log(data)
    }, (err:any) => {
      console.log("entry not found")
    })
  }

}
