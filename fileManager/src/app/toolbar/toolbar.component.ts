import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FolderService } from '../service/folder';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() isShowDialog;
  @Input() isUploadActive;
  // @Input() activeFiles;
  @Output() showDialogToggle = new EventEmitter<Boolean>();
  @Output() activeUploadToggle = new EventEmitter<Boolean>();
  @Output() isReloadFolders = new EventEmitter<Boolean>();
  parentValue: String;

  constructor(private folderS: FolderService) {
    this.parentValue = folderS.parentFolder;
  }

  ngOnInit() {
  }

  get isSidebarVisible(): String {
      this.parentValue = this.folderS.parentFolder
      return this.folderS.parentFolder;
  }

  createFolder(value: boolean) {
    this.isShowDialog = value;
    this.showDialogToggle.emit(this.isShowDialog)
    // set parent value
    this.folderS.setParentFolder("");
  }

  confirmCreateFolder() {
    var $input = (<HTMLInputElement>document.getElementsByName("newFolderName")[0]);
    var name = $input.value;
    if (name != null && name.trim() == "") {
      (<HTMLInputElement>$input.parentNode).classList.add("ui-focus")
      return
    }
    // Merge parent name incase create sub-folder
    var parent = $input.attributes.getNamedItem("data-parent").value.trim()
    if (parent != "") name = parent + "/" + name

    this.folderS.create(name).subscribe((response : any) => {
      if (response.code == 200) {
        this.isShowDialog = false
        this.showDialogToggle.emit(this.isShowDialog)
        this.isReloadFolders.emit(true)
      }
    });
  }

  upload() {

  }
}
