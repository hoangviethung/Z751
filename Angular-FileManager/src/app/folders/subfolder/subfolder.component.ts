import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FolderModel } from 'src/app/model/foldermodel';

@Component({
    selector: 'app-sub-folder',
    templateUrl: './subfolder.component.html',
    //styleUrls: ['./childfolder.component.css']
})
export class SubFolderComponent implements OnInit {
    @Input() parent;
    @Input() currentFolder;
    @Input() basicMenu;
    @Output() valueUpdate = new EventEmitter<FolderModel>();

    ngOnInit() {
    }

    changeCurrentFolder($event) {
        this.valueUpdate.emit($event)
    }

    onLeftClick($event, item) {
        $event.target.classList.add("ui-btn-active")
        this.valueUpdate.emit(item)
    }

    onArrowClick($event, item: FolderModel) {
        // Switch value for item.isExpanded
        item.isExpanded = item.isExpanded ? false : true;
        //
    }
}