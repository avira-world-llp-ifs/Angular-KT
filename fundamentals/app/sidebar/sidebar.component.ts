import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  isSidebarOpen = false;
  tabName = ""
  count = 5

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  changeTabName(tabClickedName:string){
    this.tabName = tabClickedName
    console.log(tabClickedName)
  }

  countIncremntCall(value:number){
    this.count = value;
  }
}
