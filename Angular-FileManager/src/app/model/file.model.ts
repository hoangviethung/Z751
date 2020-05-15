export class FileModel {
	// DATA bắt buộc
	data: any;
	path: string;
	name: string;
	type: string;
	imageFolder: string;
	// DATA không bắt buộc
	length?: number;
	id?: string;
}
