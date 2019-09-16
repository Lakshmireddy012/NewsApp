import { Component, OnInit } from '@angular/core';
import { CommonSharedService } from '../services/common-shared.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  requestParams:any ={};
  constructor() {
    
  }
  ngOnInit(){
    this.requestParams={ category: "business" };
  }
}
