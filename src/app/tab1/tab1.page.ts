import { Component, OnInit } from "@angular/core";
import { NavController } from '@ionic/angular';

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page implements OnInit{
  requestParams:any ={};
  constructor(public navCtrl: NavController) {
    
  }
  ngOnInit(){
    this.requestParams={};
  }
}
