export class RoleModel {
	id: number;
	name: string;
	description: string;
	features: Array<FeatureModel>;
}

export class FeatureModel {
	name: string;
	value: number;
}
