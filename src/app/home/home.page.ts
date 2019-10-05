import { Component , ViewChild, OnInit} from '@angular/core';
import { IonTabs, Platform } from '@ionic/angular';
import { SwipeTabDirective } from '../directive/swipe-tab.directive';
import { CommonSharedService } from '../services/common-shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  @ViewChild(SwipeTabDirective, {static:false}) swipeTabDirective: SwipeTabDirective;
  @ViewChild('myTabs', {static:false}) tabRef: IonTabs;
  newsCategories;
  requestParams={};
  isSearchPerformed=false;
  public devWidth = this.platform.width();
  constructor(public platform: Platform, private commonService: CommonSharedService,private router: Router ) {
    var savedValue=localStorage.getItem("savedNewsCategories");
    if(savedValue){
      this.newsCategories=JSON.parse(savedValue);
    }else{
      this.newsCategories=this.commonService.newsCategories;
    }
  }
  ionTabsDidChange($event) {
    this.swipeTabDirective.onTabInitialized($event.tab);
  }

  onTabChange($event) {
    this.tabRef.select($event);
  }

  search(searchValue){
    if(searchValue!=null && searchValue){
      this.isSearchPerformed=true;
      this.requestParams={ q: searchValue };
    }
  }

  close(){
    this.isSearchPerformed=false;
  }

  ngOnInit(){
    
  }
}
