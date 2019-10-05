import { Component, OnInit, Inject } from "@angular/core";
import { CommonSharedService } from "../services/common-shared.service";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: "app-list",
  templateUrl: "list.page.html",
  styleUrls: ["list.page.scss"]
})
export class ListPage implements OnInit {
  newsCategories: any;
  numberofNews=10;
  public isToggled: boolean;
  constructor(private commonService: CommonSharedService,@Inject(DOCUMENT) private document: Document) {
    var savedValue=localStorage.getItem("savedNewsCategories");
    if(savedValue){
      this.newsCategories=JSON.parse(savedValue);
    }else{
      this.newsCategories=this.commonService.newsCategories;
    }
    var nightMode=JSON.parse(localStorage.getItem("nightMode"));
    if(nightMode){
      this.isToggled=nightMode;
    }
  }

  ngOnInit() {}
  saveSettings() {
    localStorage.setItem("savedNewsCategories",JSON.stringify(this.newsCategories));
    localStorage.setItem("numberofNews",JSON.stringify(this.numberofNews));
    localStorage.setItem("nightMode",JSON.stringify(this.isToggled));
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

  ionChange(){
    if(this.isToggled){
      this.document.body.classList.add('dark');
    }else{
      this.document.body.classList.remove('dark');
    }
  }
}
