import { Component, OnInit } from '@angular/core';
import { NavBarService } from './shared/nav-bar.service';
import { NavBarData } from './shared/nav-bar-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private navBarDynamic: NavBarService) {}

  dynamicNavBarItems: NavBarData[] = [];
  theme: string = "dark";
  ngOnInit() {
    this.navBarDynamic.listen((c: NavBarData) => {
      this.dynamicNavBarItems.push(c);
    });

    this.navBarDynamic.listenRemove((c: NavBarData) => {
      var index = this.dynamicNavBarItems.indexOf(c);
      this.dynamicNavBarItems.splice(index, 1);
    });
  }

  title = 'stampdata.client';
}
