import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Auth from '@/store/auth'
import Books from '@/store/books'

let books: Books
let auth: Auth

const initializeStores = (store: Store<any>): void => {
	books = getModule(Books, store)
	auth = getModule(Auth, store)
}

export { initializeStores, books, auth }
