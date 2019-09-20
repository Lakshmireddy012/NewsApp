import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";

import { HomePage } from "./home.page";
import { ViewNewsItemPageModule } from "../view-news-item/view-news-item.module";
import { SwipeTabDirective } from "../directive/swipe-tab.directive";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewNewsItemPageModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePage,
        children: [
          {
            path: "tab1",
            children: [
              {
                path: "",
                loadChildren: () =>
                  import("../tab1/tab1.module").then(m => m.Tab1PageModule)
              }
            ]
          },
          {
            path: "tab2",
            children: [
              {
                path: "",
                loadChildren: () =>
                  import("../tab2/tab2.module").then(m => m.Tab2PageModule)
              }
            ]
          },
          {
            path: "tab3",
            children: [
              {
                path: "",
                loadChildren: () =>
                  import("../tab3/tab3.module").then(m => m.Tab3PageModule)
              }
            ]
          },
          {
            path: "tab4",
            children: [
              {
                path: "",
                loadChildren: () =>
                  import("../tab4/tab4.module").then(m => m.Tab4PageModule)
              }
            ]
          },
          {
            path: "tab5",
            children: [
              {
                path: "",
                loadChildren: () =>
                  import("../tab5/tab5.module").then(m => m.Tab5PageModule)
              }
            ]
          },
          {
            path: "tab6",
            children: [
              {
                path: "",
                loadChildren: () =>
                  import("../tab6/tab6.module").then(m => m.Tab6PageModule)
              }
            ]
          },
          {
            path: "tab7",
            children: [
              {
                path: "",
                loadChildren: () =>
                  import("../tab7/tab7.module").then(m => m.Tab7PageModule)
              }
            ]
          },
          {
            path: "",
            redirectTo: "/home/tab1",
            pathMatch: "full"
          }
        ]
      },
      {
        path: "",
        redirectTo: "/home/tab1",
        pathMatch: "full"
      }
    ])
  ],
  declarations: [HomePage, SwipeTabDirective],
  exports: []
})
export class HomePageModule {}
