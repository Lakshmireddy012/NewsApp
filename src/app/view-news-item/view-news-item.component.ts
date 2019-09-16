import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { CommonSharedService } from '../services/common-shared.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-view-news-item',
  templateUrl: './view-news-item.component.html',
  styleUrls: ['./view-news-item.component.scss'],
})
export class ViewNewsItemComponent implements OnInit , OnChanges {
  newsList=[];
  favIconsUrl="http://www.google.com/s2/favicons?domain=";
  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
  @Input() requestParams;
  totalNews;
  viewNewsSourceFlag=false;
  ngOnInit() {
    
  }
  ngOnChanges(){
    this.getNews(undefined);
  }
  publishedTime(publishTime){
    var publishedTime:any=new Date(publishTime);
    var currentTime:any=new Date();
    var diffSeconds = (currentTime - publishedTime)/1000;
    var HH = Math.floor(diffSeconds/3600) % 24;
    return HH;
  }

  constructor(private commonService: CommonSharedService , private iab: InAppBrowser) {
    
  }

  getNews(event) {
    this.requestParams.pageSize=10;
    if(this.requestParams.page){
      this.requestParams.page=this.requestParams.page+1;
    }else{
      this.requestParams.page=1;
    }
    this.commonService.getNews(this.requestParams).subscribe((args:any) => {
      console.log("news", args);
      if(event){
        event.target.complete();
      }
      this.totalNews=args.totalResults;
      this.newsList=[ ...this.newsList, ...args.articles];
    });
  }

  loadData(event) {
    console.log("load data",event);
    //event.target.complete();
    if (this.newsList.length == this.totalNews) {
          event.target.disabled = true;
    }else{
      this.getNews(event);
    }
  }

  viewNewsSource(itemUrl){
    this.iab.create(itemUrl);
  }
}
