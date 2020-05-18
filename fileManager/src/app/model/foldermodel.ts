export class FolderModel {
    name: string;
    path: string;
    totalfolder: number;
    totalfile: number;
    items: FolderModel[];
    id?: string;
    level: number = 0;
    isExpanded: boolean = false;
}