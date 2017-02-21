<template>
	<div id="app">
		<chaos-loading></chaos-loading>
		{{ meg }}
	</div>
</template>

<script>
	import ChaosLoading from './components/loading.vue';

	export default{
		name:'app',
		components:{
			ChaosLoading
		},
		data(){
			return {
				meg:'djjdjd'
			}
		}
	}
</script>

<style lang="scss">
	*{
		padding: 0;
		margin: 0;
		font-family: "Microsoft Yahei UI";
	}
	html,body{
		width: 100%;
		height: 100%;
	}
</style>