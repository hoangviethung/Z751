import { ApiConfigModel } from "./api-config.model";

export class AppConfigModel {
	private static _ApiConfig: ApiConfigModel;
	public static get ApiConfig() {
		if (!this._ApiConfig) {
			this._ApiConfig = new ApiConfigModel();
		}
		return this._ApiConfig;
	}
}
