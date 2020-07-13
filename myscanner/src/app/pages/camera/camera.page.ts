import { CameraService } from './../../services/camera.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  constructor(public cameraservice: CameraService) { }

  ngOnInit() {
  }
 
}
// The Master
// Key System