import { defineStore } from 'pinia'
import {
	graphFB,
	TOKEN,
	IDBusinessAccountIG,
	fieldsStringIGPost,
} from '@/utils/constants'
import axios from 'axios'
import { IPostListIGData } from '@/utils/types'

export const useIGStore = defineStore('igStore', {
	state: () => ({
		IGMediaPosts: {} as IPostListIGData,
		isLoading: false, // Начальное значение - загрузка не выполняется
	}),

	actions: {
		async fetchIGPosts() {
			try {
				this.isLoading = true
				const response = await axios.get(
					graphFB + IDBusinessAccountIG + '/media',
					{
						params: {
							fields: fieldsStringIGPost,
							access_token: TOKEN,
						},
					}
				)
				this.IGMediaPosts = response.data
			} catch (error) {
				console.log(error)
			} finally {
				this.isLoading = false // Вне зависимости от результата запроса установите isLoading в false
			}
		},
	},
})
