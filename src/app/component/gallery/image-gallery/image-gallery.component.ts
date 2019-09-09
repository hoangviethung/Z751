import { Component, OnInit } from '@angular/core';
import { routeAnimation } from '../../../shared/animations';
@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css'],
  animations: [routeAnimation]
})
export class ImageGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
