
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

					<g v-if="type === 'line'" class="chaos-loading-line">
						<path d="M-100 50 L200 50"></path>
					</g>
					
				</svg>

				<!-- <div class="chaos-loading-line" v-if="type === 'line'"></div> -->

				<img v-if="!svgShow" :src = "imgUrl" />
				<p> {{ text }}</p>
			</div>
		</div>
	</transition>
	
</template>

<script>
	import  { Browser,$ } from '../js/fundamental.js';

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
				default:'line'
			},
			show:{
				type:Boolean,
				default:true
			}
		},
		data(){
			return {
				svgShow: this.imgUrl ? false : true,
				offset: 800 
			}
		},
		mounted(){

			if (Browser.indexOf('ie') > -1) {

				$('g>path').forEach(function(el){

					offset(el);
				})
			}

		},
		methods:{
			// ie svg不支持css动画，使用js改变
			offset(el){
				if (this.offset < -800) {
					this.offset = 800;
				}
				el.style.strokeDashoffset = obj.num;
				this.offset--;

				requestAnimationFrame(this.offset);
			}
		}

	}

</script>

<style lang = "scss" scoped>
	$roseRed: #f90157;
	$grassGreen: #78e290;
	$lightYellow: #f0e68c;

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

		.chaos-loading-svg path{
			stroke-dasharray: 800px;
			stroke-dashoffset:0px;
			stroke-width:3;
			fill: none;
		}
		/*线条三角形*/
		.chaos-stroke-trigon path{
			/*fill: #e5004f;*/
			animation: stroke-show 3s infinite;
		}
		.chaos-stroke-trigon path:first-child{
			stroke: $grassGreen;
		}
		.chaos-stroke-trigon path:last-child{
			stroke: $roseRed;
			 /*#78e290*/
		}
		
		/*空间三角形*/
		.chaos-space-trigon path{
			stroke-width:13;
			animation: stroke-show infinite;
			animation-duration: 4s !important;
		}
		.chaos-space-trigon path:first-child,.chaos-space-trigon path:nth-child(4){
			stroke: $lightYellow ;
		}
		.chaos-space-trigon path:nth-child(2){
			/*animation-delay: 1s;*/
			stroke: $grassGreen;
		}
		.chaos-space-trigon path:nth-child(3){
			/*animation-delay: 2s;*/
			stroke:  $roseRed;
		}
		.chaos-space-trigon path:nth-child(4){

			stroke-width:4.5;
			opacity: 0;
			/*stroke: black;*/
			animation: hide infinite;
		}

		@keyframes stroke-show{
			0%{
				stroke-dashoffset:800px;
			}
			45%,60%{
				stroke-dashoffset:0px;
			}
		/*	50%{
				stroke-dashoffset:-100;
			}*/
			100%{
				stroke-dashoffset:-800px;
			}
		}

		@keyframes hide{
			0%,4%{
				opacity: 0;
			}
			10%,64%{
				opacity: 1;
			}
			66%,100%{
				opacity: 0;
			}
		}

	}

	.slide-enter-active {
	  transition: all .3s ease-out;
	}
	.slide-leave-active {
	  transition: all .3s ease-in;
	}
	.slide-enter, .slide-leave-active {
	  transform: translateY(100%);
	}

	.chaos-loading-line path{
		stroke-width:1.5 !important;
		stroke: $roseRed;
		animation:lineLoading 3s infinite ease-in-out;
	}
	@keyframes lineLoading{
		0%{
			stroke-dashoffset:800px;
		}
/*		25%{
			stroke-dashoffset:0px;
		}*/
		50%{
			stroke-dashoffset:-300px;
		}
/*		75%{
			stroke-dashoffset:-0px;
		}*/
		100%{
			stroke-dashoffset:800px;
		}
	}
</style>