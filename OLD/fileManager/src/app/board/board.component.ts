import { Component, OnInit, Input, SimpleChanges, Renderer2, ViewChild, HostListener } from '@angular/core';
import { FileService } from '../service/file';
import { FileModel } from '../model/filemodel';
import { ContextMenuComponent } from 'ngx-contextmenu';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  @Input() currentFolder;
  @ViewChild(ContextMenuComponent, { static: false }) public basicMenu: ContextMenuComponent;
  isSingleClick: Boolean = true;
  isMultiSelect: Boolean = false;
  activeFiles = [];
  fileHover: FileModel;
  files = [];

  constructor(private fileS: FileService, private renderer: Renderer2) { 
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getFiles()
    // // changes.prop contains the old and the new value...
    // console.log(changes.prop)
  }

  getFiles() {
    this.fileS.gets(this.currentFolder.path).subscribe((element: any) => {
      // Make random Id
      this.files = this.fileS.randomId(element.data, "c")
    })
  }

  mouseEnter(item) {
    setTimeout(()=>{ 
      this.fileHover = item
    }, 1000);
  }

  mouseLeave() {
    this.fileHover = null
  }

}
