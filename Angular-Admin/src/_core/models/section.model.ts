import { Image } from './image.model'

export class SectionModel {
	id: number
	title: string
	content: string
	image: string
	order: number
	images: Array<Image>
	orderTitle: string
}
