const graphFB = 'https://graph.facebook.com/v18.0/'
const TOKEN = process.env.VUE_APP_IG_TOKEN
const IDBusinessAccountIG = process.env.VUE_APP_ID_BUSINESS_ACCOUNT_IG

const getFieldsIGPost = [
	'id',
	'caption',
	'like_count',
	'media_product_type',
	'media_type',
	'media_url',
	'thumbnail_url',
	'children{media_product_type,media_type,media_url,permalink,thumbnail_url}',
	'permalink',
	'shortcode',
	'timestamp',
	'comments_count',
	'comments.limit(200){timestamp,text,username,like_count,replies.limit(200){timestamp,text,username,like_count}}',
]
// QUERY параметры: owner?

const fieldsStringIGPost = getFieldsIGPost.join(',') // Преобразование массива в строку с запятыми

export { graphFB, TOKEN, IDBusinessAccountIG, fieldsStringIGPost }
