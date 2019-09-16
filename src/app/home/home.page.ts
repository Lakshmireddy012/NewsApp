import { Component , ViewChild} from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { SwipeTabDirective } from '../directive/swipe-tab.directive';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(SwipeTabDirective, {static:false}) swipeTabDirective: SwipeTabDirective;
  @ViewChild('myTabs', {static:false}) tabRef: IonTabs;
  constructor() {}
  ionTabsDidChange($event) {
    console.log('[TabsPage] ionTabsDidChange, $event: ', $event);
    this.swipeTabDirective.onTabInitialized($event.tab);
  }

  onTabChange($event) {
    console.log('[TabsPage] onTabChange, $event: ', $event);
    this.tabRef.select($event);
  }
}
