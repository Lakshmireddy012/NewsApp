import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewNewsItemComponent } from './view-news-item.component';
import { HttpClientModule } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule
  ],
  declarations: [ViewNewsItemComponent],
  exports: [ViewNewsItemComponent],
  providers: [
    InAppBrowser
  ]
})
export class ViewNewsItemPageModule {}
