import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ActivitiesService {
	// HÌNH ẢNH
	activitiesImageList = [
		{
			thumbnail: './assets/images/activities/album-video/1.jpg',
			title: 'Khuôn viên z751',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/2.jpg',
			title: 'Chương trình văn nghệ',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/3.jpg',
			title: 'Lễ Quốc Khánh 2/9',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/4.jpg',
			title: 'Công trình hải cảng',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/1.jpg',
			title: 'Khuôn viên z751',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/2.jpg',
			title: 'Chương trình văn nghệ',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/3.jpg',
			title: 'Lễ Quốc Khánh 2/9',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/4.jpg',
			title: 'Công trình hải cảng',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/1.jpg',
			title: 'Khuôn viên z751',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/2.jpg',
			title: 'Chương trình văn nghệ',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/3.jpg',
			title: 'Lễ Quốc Khánh 2/9',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/4.jpg',
			title: 'Công trình hải cảng',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/4.jpg',
			title: 'Công trình hải cảng',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/4.jpg',
			title: 'Công trình hải cảng',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/4.jpg',
			title: 'Công trình hải cảng',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/4.jpg',
			title: 'Công trình hải cảng',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/4.jpg',
			title: 'Công trình hải cảng',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/4.jpg',
			title: 'Công trình hải cảng',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/4.jpg',
			title: 'Công trình hải cảng',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/4.jpg',
			title: 'Công trình hải cảng',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/4.jpg',
			title: 'Công trình hải cảng',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/4.jpg',
			title: 'Công trình hải cảng',
			time: '25/04/2019',
			typeName: 'Video'
		},
	]

	// VIDEO
	activitiesVideoList = [
		{
			thumbnail: './assets/images/activities/album-video/1.jpg',
			title: 'Khuôn viên z751',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/2.jpg',
			title: 'Chương trình văn nghệ',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/3.jpg',
			title: 'Lễ Quốc Khánh 2/9',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/4.jpg',
			title: 'Công trình hải cảng',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/1.jpg',
			title: 'Khuôn viên z751',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/2.jpg',
			title: 'Chương trình văn nghệ',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/3.jpg',
			title: 'Lễ Quốc Khánh 2/9',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/4.jpg',
			title: 'Công trình hải cảng',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/1.jpg',
			title: 'Khuôn viên z751',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/2.jpg',
			title: 'Chương trình văn nghệ',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/3.jpg',
			title: 'Lễ Quốc Khánh 2/9',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/4.jpg',
			title: 'Công trình hải cảng',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/4.jpg',
			title: 'Công trình hải cảng',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/4.jpg',
			title: 'Công trình hải cảng',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/4.jpg',
			title: 'Công trình hải cảng',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/4.jpg',
			title: 'Công trình hải cảng',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/4.jpg',
			title: 'Công trình hải cảng',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/4.jpg',
			title: 'Công trình hải cảng',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/4.jpg',
			title: 'Công trình hải cảng',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/4.jpg',
			title: 'Công trình hải cảng',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/4.jpg',
			title: 'Công trình hải cảng',
			time: '25/04/2019',
			typeName: 'Video'
		},
		{
			thumbnail: './assets/images/activities/album-video/4.jpg',
			title: 'Công trình hải cảng',
			time: '25/04/2019',
			typeName: 'Video'
		},
	]

	constructor() { }

	getActivitiesImageList() {
		return this.activitiesImageList;
	}

	getActivitiesVideoList() {
		return this.activitiesVideoList;
	}
}
