<template>
	<DashboardTemplate />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	middleware({ store, redirect }) {
		if (!store.state.auth.token) return redirect('/login')
	},
})
</script>