import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, ViewChild } from '@angular/core';
import { FolderModel } from '../model/foldermodel';
import { ContextMenuComponent } from 'ngx-contextmenu';
import { FolderService } from '../service/folder';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {
  @Input() folders;
  @Input() currentFolder;
  @Input() isShowDialog;
  @Output() valueUpdate = new EventEmitter<FolderModel>();
  @Output() showDialogToggle = new EventEmitter<Boolean>();
  @Output() isReloadFolders = new EventEmitter<Boolean>();
  @ViewChild(ContextMenuComponent, { static: false }) public basicMenu: ContextMenuComponent;

  constructor(private folderS: FolderService) { 
  }

  ngOnInit() {
  }

  onLeftClick($event, item) {
    $event.target.classList.add("ui-btn-active")
    this.valueUpdate.emit(item)
  }

  changeCurrentFolder($event) {
    this.valueUpdate.emit($event)
  }

  onArrowClick($event, item: FolderModel) {
    // Switch value for item.isExpanded
    item.isExpanded = item.isExpanded ? false: true;
    //
  }

  createSubFolder($event) {
    // Change data parent of dialog
    this.folderS.setParentFolder($event.item.path)

    // Show dialog
    this.isShowDialog = true
    this.showDialogToggle.emit(this.isShowDialog)
  }

  renameFolder($event) {
    // Show dialog
    this.isShowDialog = true
    this.showDialogToggle.emit(this.isShowDialog)
  }

  deleteFolder($event) {
    this.folderS.delete($event.item.path).subscribe((response : any) => {
      if (response.code == 200) {
        // Reload folders
        this.isReloadFolders.emit(true)
      }
    })
  }
}
