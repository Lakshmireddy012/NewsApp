import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CommonSharedService {
  topHeadLines = "https://newsapi.org/v2/top-headlines?";
  allNews = "https://newsapi.org/v2/everything?";
  stockPrices = "https://cors-anywhere.herokuapp.com/https://myallies-breaking-news-v1.p.rapidapi.com/GetCompanyDetailsBySymbol?symbol=BAJAJHLDNG.NS";
  params: any = { apiKey: "8961e01d14d543a1acbe37bed2a23314" };
  nightMode=false;

  httpOptions = {
    headers: new HttpHeaders({
      "x-rapidapi-key": "989ebe26b3mshe30f6acd9cd0cc3p1d4e5ejsnef849699a2fd",
      "x-api-key": "f5040c89bfmsh6c9b3f4a571eb78p14ae3djsn994d7ee4bd1e"
    })
  };
  constructor(private http: HttpClient) {
    this.getCountryCode();
  }

  newsCategories = [
    { type: "Top Headlines", path: "tab1", icon: "flash", selected: true },
    { type: "Sports", path: "tab2", icon: "football", selected: true },
    { type: "Business", path: "tab3", icon: "stats", selected: true },
    { type: "Entertainment", path: "tab4", icon: "film", selected: true },
    { type: "Technology", path: "tab5", icon: "bulb", selected: true },
    { type: "Science", path: "tab6", icon: "science", selected: true },
    { type: "Health", path: "tab7", icon: "health", selected: true }
  ];

  getNews(requestParams) {
    return this.http.get(this.topHeadLines, {
      params: { ...this.params, ...requestParams }
    });
  }
  getEveryNews(requestParams) {
    delete this.params["country"];
    return this.http.get(this.allNews, {
      params: { ...this.params, ...requestParams }
    });
  }

  getCountryCode() {
    return this.http.get("https://ipapi.co/json");
  }

  getStockNews() {
    return this.http.get(
      this.stockPrices  ,
      this.httpOptions
    );
  }
}
