import { Injectable } from '@angular/core';
import { MenuModel } from 'src/core/models/Menu.model';

@Injectable()
export class HeaderService {

	getMenu(menus: Array<MenuModel>){
		let tempMenus:Array<MenuModel> = new Array<MenuModel>();

		tempMenus = menus.filter(item => {
			if(item.parentId == -99){
				return item
			}
		})
		tempMenus.forEach((element,index) => {
			element.children = [];
			menus.forEach(item => {
				if(item.parentId == element.id){
					element.children.push(item)
				}
			})
		});
		return tempMenus;
	}
}