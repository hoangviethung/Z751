import {
	transition,
	trigger,
	style,
	query,
	animate,
} from "@angular/animations";

export const slideInAnimation = trigger("routeAnimations", [
	// transition("* <=> *", [
	// 	query(":enter, :leave", [
	// 		style({
	// 			position: "fixed",
	// 			left: 0,
	// 			top: 0,
	// 			width: "100%",
	// 			height: "100%",
	// 			opacity: 0,
	// 			background: "#ffffff",
	// 		}),
	// 	]),
	// 	query(":enter", [animate("11600ms ease", style({ opacity: 1 }))]),
	// ]),
]);
