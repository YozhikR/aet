type ID = string | number

interface ICommentsData {
	data?: IComments[]
	paging?: IPaging
}
interface IRepliesData {
	data: IReplies[]
	paging?: IPaging
}
interface IComments {
	id: ID
	like_count?: number
	text?: string
	timestamp?: string
	username?: string
	replies?: IRepliesData
}
interface IReplies {
	id: ID
	like_count?: number
	text?: string
	timestamp?: string
	username?: string
}

interface IChildrenPostIG {
	media_product_type: string
	media_type: string
	media_url: string
	permalink: string
	thumbnail_url: string
}

interface IPaging {
	cursors?: {
		after?: string
		before?: string
	}
	next?: string
	previous?: string
}
interface IPostIGType {
	id: ID
	caption?: string
	like_count?: number
	media_product_type?: string
	media_type?: string
	media_url: string
	thumbnail_url?: string
	children?: IChildrenPostIG
	permalink: string
	shortcode: string
	timestamp: string
	comments?: ICommentsData
	comments_count?: number
}
interface IPostListIGData {
	data: IPostIGType[]
	paging?: IPaging
}

export { IPostListIGData, IPostIGType, IComments, ICommentsData }
