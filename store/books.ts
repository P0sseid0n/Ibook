import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'
import { Book } from '@/models'

interface Show {
	id: number
}

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
	private books = [] as Book[]
	private singleBook = {} as Book

	public get $all() {
		return this.books
	}

	public get $single() {
		return this.singleBook
	}

	@Mutation
	private SET_BOOKS(books: Book[]) {
		this.books = books
	}

	@Mutation
	private SET_SINGLE_BOOK(book: Book) {
		this.singleBook = book
	}

	@Action({ rawError: true })
	public async index() {
		try {
			const books = await $axios.$get('http://localhost:3333/books')
			this.context.commit('SET_BOOKS', books)
		} catch (error) {
			console.error(error)
		}
	}

	@Action({ rawError: true })
	async show({ id }: Show) {
		const book = await $axios.$get(`http://localhost:3333/books/${id}`)
		this.context.commit('SET_SINGLE_BOOK', book)
	}
}
