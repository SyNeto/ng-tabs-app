import {
  Component,
  QueryList,
  AfterContentInit,
  ContentChildren
} from '@angular/core';

import { TabComponent } from "../tab/tab.component";

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  constructor() { }

  ngAfterContentInit(){

    let tabsActive = this.tabs.filter((tab: TabComponent) => tab.active);

    if(tabsActive.length === 0){
      this.selectTab(this.tabs.first);
    }
    
  }

  selectTab(tab: TabComponent): void{
    this.resetTabs();
    tab.active = true;
  }
  
  resetTabs(): void{
    this.tabs
      .toArray()
      .forEach((tab: TabComponent) => tab.active = false);
  }

}
