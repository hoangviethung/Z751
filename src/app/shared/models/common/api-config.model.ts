export class ApiConfigModel {
    public server: string;
    public avatarPath: string;
    public defaultAvatarPath: string;
    public logoPath: string;
    public defaultLogoPath: string;
    public apiPrefix: string;
    public get url(): string { return `${this.server}/${this.apiPrefix}/`; }

    public constructor() {
        const config = {
            "server": "http://27.71.232.114:40003/",
            "avatarPath": "/Upload/Avatar/",
            "logoPath": "/Upload/Logo/",
            "apiPrefix": "api"
        };

        this.server = config.server;
        this.avatarPath = config.avatarPath;
        this.logoPath = config.logoPath;
        this.apiPrefix = config.apiPrefix;
    }

}
