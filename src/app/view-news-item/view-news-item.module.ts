import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewNewsItemComponent } from './view-news-item.component';
import { HttpClientModule } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';
import { ScoreCardComponent } from '../score-card/score-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset // <-- tell LazyLoadImage that you want to use IntersectionObserver
    })
  ],
  declarations: [ViewNewsItemComponent,ScoreCardComponent],
  exports: [ViewNewsItemComponent,ScoreCardComponent],
  providers: [
    InAppBrowser
  ]
})
export class ViewNewsItemPageModule {}
