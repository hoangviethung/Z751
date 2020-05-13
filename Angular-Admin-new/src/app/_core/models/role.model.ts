export class RoleModel {
	id: number;
	name: string;
	description: string;
	isSystem: boolean;
	features: Array<FeaturesListModel>;
}

export class FeaturesListModel {
	name: string;
	features: Array<FeatureModel>;
}

export class FeatureModel {
	name: string;
	value: number;
	feature: number;
	permission: Array<number>;
}

export class FeaturePostModel {
	feature: number;
	permission: number;
}
