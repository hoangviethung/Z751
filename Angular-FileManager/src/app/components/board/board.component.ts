import { Component, OnInit, Input, SimpleChanges, Renderer2, ViewChild } from '@angular/core';
import { FileService } from '../../service/file.service';
import { FileModel } from '../../model/filemodel';
import { ContextMenuComponent } from 'ngx-contextmenu';

@Component({
	selector: 'app-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
	@Input() currentFolder;
	@ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;
	isSingleClick: Boolean = true;
	isMultiSelect: Boolean = false;
	activeFiles = [];
	fileHover: FileModel;
	files = [];
	constructor(
		private fileSvc: FileService,
		private renderer: Renderer2
	) { }

	ngOnInit() {
	}

	ngOnChanges(changes: SimpleChanges) {
		this.getFiles()
	}

	getFiles() {
		this.fileSvc.getFiles(this.currentFolder.path).subscribe((element: any) => {
			// Make random Id
			this.files = this.fileSvc.randomId(element.data, "c")
		})
	}

	mouseEnter(item) {
		setTimeout(() => {
			this.fileHover = item
		}, 1000);
	}

	mouseLeave() {
		this.fileHover = null
	}
}
