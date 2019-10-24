import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-score-card",
  templateUrl: "./score-card.component.html",
  styleUrls: ["./score-card.component.scss"]
})
export class ScoreCardComponent implements OnInit, OnDestroy {
  displayCricWidget=true;
  constructor() {}
  public timerInterval:any;
  ngOnInit() {
    this.getScoreCardWidget();
  }
  getScoreCardWidget() {
    var c = document.createElement("script");
    c.src = "https://cricapi.com/widgets/widget.js";
    document.getElementById("cricapi_widget_livescores").appendChild(c);
    this.verifyAndRenderWidget();
  }
  verifyAndRenderWidget() {
    var score = document.getElementById("cricapi_widget");
    if (score) {
      var footer = document.getElementById("footer");
      if (footer) {
        this.timerInterval=setInterval(() => {
          this.customizeWidget();
        }, 10);
        this.customizeWidget();
      } else {
        setTimeout(() => {
          this.verifyAndRenderWidget();
        }, 10);
      }
    } else {
      setTimeout(() => {
        this.verifyAndRenderWidget();
      }, 10);
    }
  }

  customizeWidget() {
    var footer = document.getElementById("footer");
    footer.style.display = "none";
    var form = document.getElementById("cricapi_widget");
    var ticker = document.getElementById("ticker");
    var content = document.getElementById("content");
    var mainContent = document
      .getElementById("cricapi_live_score_widget")
      .getElementsByTagName("center")[0]
      .getElementsByTagName("h3")[0];
    mainContent.style.fontSize = "10pt";
    content.style.cssFloat = "right";
    //mainContent.style.marginTop = "6px";
    ticker.style.display = "none";
    form.style.setProperty("height", "110px", "important");
    form.style.border = "0px #7a3 solid";
    this.displayCricWidget=false;
  }

  ngOnDestroy() {
    // Will clear when component is destroyed e.g. route is navigated away from.
    clearInterval(this.timerInterval);
 }
}
