import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab7Page } from './tab7.page';
import { ViewNewsItemPageModule } from '../view-news-item/view-news-item.module';

const routes: Routes = [
  {
    path: '',
    component: Tab7Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ViewNewsItemPageModule
  ],
  declarations: [Tab7Page]
})
export class Tab7PageModule {}
