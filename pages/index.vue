<template>
	<div class="box">
		<HomeTemplate />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

import { books, auth } from '@/store'

export default Vue.extend({
	name: 'IndexPage',
	layout: 'ibook',
	async asyncData() {
		await books.index()
	},
})
</script>