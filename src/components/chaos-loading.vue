
<template>
	<transition name="slide">
		
		<div class="chaos-loading-component" v-if="show">
			<div class="chaos-loading-content">
				<svg v-if="svgShow" width="90%" height="90%" viewBox="0 0 100 100" class="chaos-loading-svg">
					<g class="chaos-stroke-trigon" v-if="type === 'stroke-trigon'">
						<path d="M50,0 L0,80 L100,80 Z" ></path>
						<path d="M50,20 L0,97 L100,97 Z" ></path>
					</g>

					<g v-if="type === 'space-trigon'" class="chaos-space-trigon">
						<path d="M0,94 L78.2,94 L50,39"></path>
						<path d="M94.5,97 L55.8,22 L27.1,77.5"></path>
						<path d="M50,4.8 L10.5,81 L67.5,81"></path>
						<path d="M62.7,73 L67.8,83 L69,75 z"></path>

					</g>
					
				</svg>

				<img v-if="!svgShow" :src = "imgUrl" />
				<p> {{ text }}</p>
			</div>
		</div>
	</transition>
	
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
				default:'space-trigon'
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
			margin-top: 10px;
		}
		.chaos-loading-svg{
				
			margin:0 auto;
			display: block;
		}

		/*线条三角形*/
		.chaos-stroke-trigon path{
			stroke-dasharray: 800;
			stroke-dashoffset:800;
			stroke-width:3;
			fill: none;
			/*fill: #e5004f;*/
			animation: stroke-show 3s infinite;
		}
		.chaos-stroke-trigon path:first-child{
			stroke: #78e290;
		}
		.chaos-stroke-trigon path:last-child{
			stroke: #f90157;
			 /*#78e290*/
		}
		
		/*空间三角形*/
		.chaos-space-trigon path{
			stroke-dasharray: 800;
			stroke-dashoffset:0;
			stroke-width:13;
			fill: none;
			animation: stroke-show  infinite;
			animation-duration: 3s !important;
		}
		.chaos-space-trigon path:first-child,.chaos-space-trigon path:nth-child(4){
			stroke: #f0e68c ;
		}
		.chaos-space-trigon path:nth-child(2){
			/*animation-delay: 1s;*/
			stroke: #78e290;
		}
		.chaos-space-trigon path:nth-child(3){
			/*animation-delay: 2s;*/
			stroke:  #f90157;
		}
		.chaos-space-trigon path:nth-child(4){

			stroke-width:4.5;
			opacity: 0;
			/*stroke: black;*/
			animation: hide infinite;
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

		@keyframes hide{
			0%,5%{
				opacity: 0;
			}
			11%,55%{
				opacity: 1;
			}
			56%,100%{
				opacity: 0;
			}
		}

	}

	.slide-enter-active,.slide-leave-active {
	  transition: all .3s ease-out;
	}
	.slide-leave-active {
	  transition: all .3s ease-in;
	}
	.slide-enter, .slide-leave-active {
	  transform: translateY(100%);
	}
</style>