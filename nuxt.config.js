export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Ibook',
		htmlAttrs: {
			lang: 'pt',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'format-detection', content: 'telephone=no' },
			{
				hid: 'description',
				name: 'description',
				content: 'Ibook - New way to read books online',
			},
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['normalize.css/normalize.css', '@/assets/scss/base.scss'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: ['@/plugins/accessor'],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: [{ path: '@/components', extensions: ['vue'], pathPrefix: false }],

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
		'@nuxtjs/style-resources',
	],

	styleResources: {
		// your settings here
		scss: ['@/components/bosons/*.scss'],
		hoistUseStatements: true, // Hoists the "@use" imports. Applies only to "sass", "scss" and "less". Default: false.
	},

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		'cookie-universal-nuxt',
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		extractCSS: true,
	},
}
