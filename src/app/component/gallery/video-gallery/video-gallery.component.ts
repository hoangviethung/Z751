import { Component, OnInit } from '@angular/core';
import { routeAnimation } from '../../../shared/animations';
@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.css'],
  animations: [routeAnimation]
})
export class VideoGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
