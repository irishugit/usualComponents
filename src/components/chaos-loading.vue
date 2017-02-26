
<template>
	<div class="chaos-loading-component" v-if="show">
		<div class="chaos-loading-content">
			<svg v-if="svgShow" width="100" height="100" viewbox="0 0 50 50" class="chaos-loading-svg">
				<g class="chaos-trigon" v-if="type === 'stroke-trigon'">
					<path d="M50,0 L0,80 L100,80 L50,0 Z" ></path>
					<path d="M50,20 L0,97 L100,97 L50,20 Z" ></path>
				</g>
				
			</svg>

			<img :src = "imgUrl" />
			<p> {{ text }}</p>
		</div>
	</div>
</template>

<script>
	
	export default {
		name:'chaos-loading',
		props:{
			text:{
				type:String,
				default:'CHAOS'
			},
			imgUrl:{
				type:String,
				// default:'./src/resource/img/loading.gif'
			},
			type:{
				type:String,
				default:'stroke-trigon'
			},
			show:{
				default:true
			}
		},
		data(){
			return {
				svgShow: this.imgUrl ? false : true
			}
		},

	}

</script>

<style lang = "scss" scoped>
	.chaos-loading-component{
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		background-color: rgba(0,0,0,1);
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
			color: white;
		}
		.chaos-loading-svg{
				
			margin:0 auto;
			display: block;
			.chaos-trigon path{
				stroke-dasharray: 800;
				stroke-dashoffset:800;
				stroke-width:3;
				fill: none;
				/*fill: #e5004f;*/
				animation: stroke-show 3s infinite;
			}
			.chaos-trigon path:first-child{
				stroke: #78e290;
			}
			.chaos-trigon path:last-child{
				stroke: #f90157;
				 /*#78e290*/
			}
		}

		@keyframes stroke-show{
			0%{
				stroke-dashoffset:800;
			}
			50%{
				stroke-dashoffset:0;
			}
		/*	50%{
				stroke-dashoffset:-100;
			}*/
			100%{
				stroke-dashoffset:-800;
			}
		}
	}

</style>