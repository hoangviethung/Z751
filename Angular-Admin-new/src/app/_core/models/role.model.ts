export class RoleModel {
	id: number;
	name: string = null;
	description: string = null;
	isSystem: boolean;
	features: Array<FeaturesListModel>;
}

export class FeaturesListModel {
	name: string = null;
	features: Array<FeatureModel>;
}

export class FeatureModel {
	name: string = null;
	value: number;
	feature: number;
	permission: Array<number>;
}

export class FeaturePostModel {
	feature: number;
	permission: number;
}
