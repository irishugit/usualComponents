<template>
	<div id="app" v-on:click="loadingShow = !loadingShow ">
		<chaos-loading type="space-trigon" :show="loadingShow"></chaos-loading>

		<div class="block" ></div>
	</div>
</template>

<script>
	import ChaosLoading from './components/chaos-loading.vue';

	export default{
		name:'app',
		components:{
			ChaosLoading
		},
		data(){
			return {
				meg:'djjdjd',
				loadingShow:true
			}
		},
		methods:{
			
		}

	}
</script>

<style lang="scss" scoped>
	*{
		padding: 0;
		margin: 0;
		font-family: "Microsoft Yahei UI";
	}
	html,body{
		width: 100%;
		height: 100%;
	}
	.block{
		width:100%;
		height:1200px;
		background: lightblue;
	}
</style>