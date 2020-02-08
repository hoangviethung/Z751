import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

	constructor() { }

	location: Location

	ngOnInit() {
		this.location = {
			latitude: 10.835047,
			longitude: 106.667749,
			zoom: 10,
			markers: [
				{
					lat: 10.835047,
					lng: 106.667749
				},
				{
					lat: 10.929392,
					lng: 106.880614
				}
			],

		}
	}
}

interface Marker {
	lat: number;
	lng: number;
}

interface Location {
	latitude: number;
	longitude: number;
	zoom: number;
	markers: Array<Marker>;
}
