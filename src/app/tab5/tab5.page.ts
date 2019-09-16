import { Component, OnInit } from '@angular/core';
import { CommonSharedService } from '../services/common-shared.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit{
  requestParams:any ={};
  constructor() {
    
  }
  ngOnInit(){
    this.requestParams={ category: "technology" };
  }
}