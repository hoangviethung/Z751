import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Injectable()
export class IndexedDbService {


	constructor(
		private dbSvc: NgxIndexedDBService
	) { }

	createNewObjectStore(){

	}

	addObjectStore(storeName: string, news) {
		return this.dbSvc.add(storeName, news);
	}

	getObjectStor(storeName: string) {
		return this.dbSvc.getAll(storeName)
	}

	clearObjectStore(storeName: string) {
		return this.dbSvc.clear(storeName)
	}
}
