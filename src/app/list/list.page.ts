import { Component, OnInit } from "@angular/core";
import { CommonSharedService } from "../services/common-shared.service";

@Component({
  selector: "app-list",
  templateUrl: "list.page.html",
  styleUrls: ["list.page.scss"]
})
export class ListPage implements OnInit {
  newsCategories: any;
  numberofNews=10;
  constructor(private commonService: CommonSharedService) {
    var savedValue=localStorage.getItem("savedNewsCategories");
    if(savedValue){
      this.newsCategories=JSON.parse(savedValue);
    }else{
      this.newsCategories=this.commonService.newsCategories;
    }
  }

  ngOnInit() {}
  saveSettings() {
    localStorage.setItem("savedNewsCategories",JSON.stringify(this.newsCategories));
    localStorage.setItem("numberofNews",JSON.stringify(this.numberofNews));
  }

  onItemChanged(event){
    var indexesArray:any=event.target.value;
    for (let index = 0; index < this.newsCategories.length; index++) {
      const element = this.newsCategories[index];
      if(indexesArray.indexOf(index)!== -1){
        element.selected=true;
      }else{
        element.selected=false;
      }
    }
  }
  numberOfNewsChanged(event){

  }
}
