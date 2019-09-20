import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab6Page } from './tab6.page';
import { ViewNewsItemPageModule } from '../view-news-item/view-news-item.module';

const routes: Routes = [
  {
    path: '',
    component: Tab6Page
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
  declarations: [Tab6Page]
})
export class Tab6PageModule {}
