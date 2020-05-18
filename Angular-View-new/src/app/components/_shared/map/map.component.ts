import { Component, OnInit, Input } from "@angular/core";
import { BranchModel } from "src/core/models/Branch.model";
import { HttpService, InputRequestOption } from 'src/core/services/http.service';
import { API } from 'src/core/configs/api';
import { map } from 'rxjs/operators';
import { response } from 'express';

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

@Component({
	selector: "app-map",
	templateUrl: "./map.component.html",
	styleUrls: ["./map.component.scss"],
})

export class MapComponent implements OnInit {
	@Input('listAddress') listAddress: Array<BranchModel>;
	constructor(
		private httpSvc: HttpService
	) { }

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
			latitude: this.listAddress[0].lat,
			longitude: this.listAddress[0].lng,
			zoom: 10,
			markers: this.listAddress
		};
		console.log(this.location);
	}
}
