import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CommonSharedService {
  topHeadLines = "https://newsapi.org/v2/top-headlines?";
  params = { apiKey: "8961e01d14d543a1acbe37bed2a23314", country: "in" };

  constructor(private http: HttpClient) {}

  getNews(requestParams) {
    return this.http.get(this.topHeadLines, {
      params: {...this.params, ...requestParams}
    });
  }
}
