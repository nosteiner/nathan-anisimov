export interface ICoordinates {
	lat: number;
	lng: number;
}

export interface IImg {
	label: string;
	path: string;
	date?: string;
	credit?: string;
}
export interface IArticle {

	source?: string;
	date?: string;
	title?: string;
	titlePath?: string;
	path?: string;
	originPath?: string;
}
export interface IInfo {
	imgs: IImg[];
	s3Folder?: string;
	articles?: IArticle[];
	mainImg?: IImg;
	title: string;
	year: number;
	body: string;
	category: string;
	links?: ILink[];
	medal?: boolean;
	donation?: boolean;
}
export interface ILink {
	text: string;
	url: string;
}

export interface IMarker {
	id: number;
	coordinates: ICoordinates;
	// icon: string;
	info: IInfo;
}

export interface IMap {
	markers: IMarker[];
}