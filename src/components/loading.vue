
<template>
	<div class="chaos-loading-component">
		<div class="chaos-loading-content">
			<img :src = "url" />
			<p> {{ text }}</p>
		</div>
	</div>
</template>

<script>
	
	export default {
		name:'chaos-loading',
		data(){
			return {
				text:'i\'m loading text',
				url:'./src/resource/img/loading.gif'
			}
		}
	}

</script>

<style lang = "scss" scoped>
	.chaos-loading-component{
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		background-color: white;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		.chaos-loading-content{
			width:35%;
			height: 25%;
		}

		img{
			width: 200px;
			display: block;
			margin:auto;
		}
		p{
			text-align: center;
			font-size:1em;
			font-weight: 600;
			/*color: white;*/
		}
	}

</style>