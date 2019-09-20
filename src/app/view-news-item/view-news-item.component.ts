import { Component, OnInit, Input, OnChanges, ViewChild } from "@angular/core";
import { CommonSharedService } from "../services/common-shared.service";
import { IonInfiniteScroll } from "@ionic/angular";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";

@Component({
  selector: "app-view-news-item",
  templateUrl: "./view-news-item.component.html",
  styleUrls: ["./view-news-item.component.scss"]
})
export class ViewNewsItemComponent implements OnInit, OnChanges {
  newsList = [];
  favIconsUrl = "http://www.google.com/s2/favicons?domain=";
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  @Input() requestParams;
  @Input() isSearch;
  totalNews;
  viewNewsSourceFlag = false;
  ngOnInit() {
    
  }
  ngOnChanges() {
    this.newsList=[];
    this.setPageNumberPageSize();
    if (this.isSearch == undefined) {
      this.getNews(undefined);
    } else {
      this.getSearchedNews(undefined);
    }
  }

  publishedTime(publishTime) {
    var publishedTime: any = new Date(publishTime);
    var currentTime: any = new Date();
    var diffSeconds = (currentTime - publishedTime) / 1000;
    var HH = Math.floor(diffSeconds / 3600) % 24;
    return HH;
  }

  constructor(
    private commonService: CommonSharedService,
    private iab: InAppBrowser
  ) {}

  getNews(event) {
    if (this.commonService.params.country == undefined) {
      this.commonService.getCountryCode().subscribe((val: any) => {
        this.commonService.params.country = val.country.toLowerCase();
        this.getMergeNews(event);
      });
    } else {
      this.getMergeNews(event);
    }
  }

  getSearchedNews(event){
    this.commonService.getEveryNews(this.requestParams).subscribe((args: any) => {
      if (event) {
        event.target.complete();
      }
      this.totalNews = args.totalResults;
      this.newsList = [...this.newsList, ...args.articles];
    });
  }

  getMergeNews(event) {
    this.commonService.getNews(this.requestParams).subscribe((args: any) => {
      if (event) {
        event.target.complete();
      }
      this.totalNews = args.totalResults;
      this.newsList = [...this.newsList, ...args.articles];
    });
  }

  loadData(event) {
    if (this.newsList.length == this.totalNews) {
      event.target.disabled = true;
    } else {
      this.requestParams.page = this.requestParams.page + 1;
      if(this.isSearch){
        this.getSearchedNews(event);
      }else{
        this.getNews(event);
      }
    }
  }

  viewNewsSource(itemUrl) {
    this.iab.create(itemUrl);
  }

  setPageNumberPageSize(){
    this.requestParams.page = 1;
    var numberofNews = localStorage.getItem("numberofNews");
    if (numberofNews) {
      this.requestParams.pageSize = JSON.parse(numberofNews);
    } else {
      this.requestParams.pageSize = 10;
    }
  }
}
