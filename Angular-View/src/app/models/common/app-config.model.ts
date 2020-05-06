import { ApiConfigModel } from "./api-config.model";

export class AppConfigModel {
	private static _ApiConfigModel = ApiConfigModel;
	public static get ApiConfigModel() {
		if (!this._ApiConfigModel) {
			this._ApiConfigModel = ApiConfigModel;
		}
		return this._ApiConfigModel;
	}
}
