import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CameraService } from 'src/app/services/camera.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( private menu: MenuController,public cameraservice: CameraService) { }

  ngOnInit() {
  }

}
