import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

  @Component({
    selector: 'app-tad-menu',
    templateUrl: './tad-menu.component.html',
    styleUrls: ['./tad-menu.component.scss'],
  })
  export class TadMenuComponent {
    constructor(private menu: MenuController) {}
  
    closeMenu() {
      this.menu.close();
    }
  }