import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-map",
	templateUrl: "./map.component.html",
	styleUrls: ["./map.component.scss"],
})
export class MapComponent implements OnInit {
	constructor() {}

	location: Location;
	customStyle = [
		{
			featureType: "administrative",
			elementType: "labels.text.fill",
			stylers: [
				{
					color: "#444444",
				},
			],
		},
		{
			featureType: "landscape",
			elementType: "all",
			stylers: [
				{
					color: "#f2f2f2",
				},
			],
		},
		{
			featureType: "poi",
			elementType: "all",
			stylers: [
				{
					visibility: "off",
				},
			],
		},
		{
			featureType: "road",
			elementType: "all",
			stylers: [
				{
					saturation: -100,
				},
				{
					lightness: 45,
				},
			],
		},
		{
			featureType: "road.highway",
			elementType: "all",
			stylers: [
				{
					visibility: "simplified",
				},
			],
		},
		{
			featureType: "road.arterial",
			elementType: "labels.icon",
			stylers: [
				{
					visibility: "off",
				},
			],
		},
		{
			featureType: "transit",
			elementType: "all",
			stylers: [
				{
					visibility: "off",
				},
			],
		},
		{
			featureType: "water",
			elementType: "all",
			stylers: [
				{
					color: "#0c6db5",
				},
				{
					visibility: "on",
				},
			],
		},
	];

	ngOnInit() {
		this.location = {
			latitude: 10.835047,
			longitude: 106.667749,
			zoom: 10,
			markers: [
				{
					lat: 10.835047,
					lng: 106.667749,
				},
				{
					lat: 10.929392,
					lng: 106.880614,
				},
			],
		};
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
