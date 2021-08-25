import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-net-worth',
  templateUrl: './net-worth.component.html',
  styleUrls: ['./net-worth.component.css']
})
export class NetWorthComponent implements OnInit {

  constructor(private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    
 }

}
