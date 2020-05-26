import {
	trigger,
	transition,
	style,
	query,
	group,
	animateChild,
	animate,
	keyframes,
} from "@angular/animations";

export const loading = trigger("routeAnimations", [
	transition("* <=> *", [
		query(
			":enter, :leave",
			[
				style({
					position: "fixed",
					left: 0,
					top: 0,
					width: "100%",
					height: "100%",
					opacity: 1,
					background: "#927482",
					zIndex: 2,
				}),
			],
			{
				optional: true,
			}
		),
		query(
			":enter",
			[
				animate(
					"2000ms ease",
					style({ opacity: 0, visibility: "hidden" })
				),
			],
			{
				optional: true,
			}
		),
		query(
			":leave",
			[
				animate(
					"2000ms ease",
					style({ opacity: 1, visibility: "visible" })
				),
			],
			{
				optional: true,
			}
		),
	]),
]);
