import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios, $cookies } from '@/utils/nuxt-instance'

interface Store {
	email: string
	password: string
}

type Token = string | null

@Module({ name: 'auth', stateFactory: true, namespaced: true })
export default class Auth extends VuexModule {
	private token = '' as Token

	@Mutation
	private UPDATE_TOKEN(token: Token) {
		this.token = token
	}

	@Action({ rawError: true })
	async create({ email, password }: Store) {
		console.log(email, password)

		const { accessToken } = await $axios.$post('http://localhost:3333/login', { email, password })

		$cookies.set('token', accessToken, {
			path: '/',
			maxAge: 60 * 60 * 24 * 7, // 7 days
		})

		console.log('Token', accessToken)

		this.context.commit('UPDATE_TOKEN', accessToken)
	}

	@Action({ rawError: true })
	public update() {
		const token = $cookies.get('token') || null
		this.context.commit('UPDATE_TOKEN', token)
	}

	@Action({ rawError: true })
	public destroy() {
		$cookies.remove('token')
		this.context.commit('UPDATE_TOKEN', null)
	}

	get aula() {
		return 'ola'
	}
}
