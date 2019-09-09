import { Component, OnInit, Input } from '@angular/core';
import { WebImageModel } from '../../../shared/models/common/web-image.model';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.less']
})
export class ImageComponent implements OnInit {

    @Input()
    src = new WebImageModel();

    constructor(
    ) {
    }

    async ngOnInit() {
    }

}
