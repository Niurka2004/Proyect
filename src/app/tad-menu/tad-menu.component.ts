import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

  @Component({
    selector: 'app-tad-menu',
    templateUrl: './tad-menu.component.html',
    styleUrls: ['./tad-menu.component.scss'],
  })
  export class TadMenuComponent  implements OnInit {

    constructor(private navCtrl: NavController) {}

    pageHome(){
      this.navCtrl.navigateRoot('/home');
    }
    pageList(){
      this.navCtrl.navigateRoot('/lista');
    }

    ngOnInit() {}

  }
