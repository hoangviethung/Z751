import { StatusCode } from '../enum/status-code.enum';

export class ApiResponse {
    public data: any;
    public message: string;
    public status: StatusCode;
    // public static get isSuccess(this: TangoResponse) { return this.statusCode == StatusCode.Success; }
    public get isSuccess(): boolean {
        return this.status === StatusCode.Success;
    }
}
