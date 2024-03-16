<template>
	<div class="gallery">
		<div class="scroll-container">
			<div class="item-container">
				<figure 
					class="feature-card-image-container feature-card"
					v-for="item in imgList" 
					:key="item.img">
					<picture class="feature-card-image">
						<source media="(max-width:734px)" :srcset="item.sourceSmall">
						<source media="(max-width:1068px)" :srcset="item.sourceMedium">
						<source media="(max-width:1440px)" :srcset="item.sourceLarge">
						<source media="(min-width:0px)" :srcset="item.sourceXLarge">
						<img :src="item.img">
					</picture>
					<figcaption class="feature-card-description">
						<p>Advanced Cameras</p>
						<p class="typography-card-headline">Selfie-takers. <br>Movie-makers. <br>Boundary-breakers.</p>
					</figcaption>
				</figure>
			</div>
			
		</div>
	</div>
</template>

<script setup lang="ts" name="home">

interface ImgItem {
	img: string,
	sourceSmall: string,
	sourceMedium: string,
	sourceLarge: string,
	sourceXLarge: string
}

const imgList: ImgItem[] = [
	{
		img: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/camera__cerpczobiwwi_xlarge.jpg',
		sourceSmall: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/camera__cerpczobiwwi_small_2x.jpg',
		sourceMedium: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/camera__cerpczobiwwi_medium_2x.jpg',
		sourceLarge: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/camera__cerpczobiwwi_large.jpg',
		sourceXLarge: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/camera__cerpczobiwwi_xlarge_2x.jpg',
	},
	{
		img: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/chip__cpj93oio1oya_xlarge.jpg',
		sourceSmall: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/chip__cpj93oio1oya_small_2x.jpg',
		sourceMedium: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/chip__cpj93oio1oya_medium_2x.jpg',
		sourceLarge: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/chip__cpj93oio1oya_large.jpg',
		sourceXLarge: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/chip__cpj93oio1oya_xlarge_2x.jpg',
	},
	{
		img: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/battery__f9km4l6jlv6u_xlarge.jpg',
		sourceSmall: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/battery__f9km4l6jlv6u_small_2x.jpg',
		sourceMedium: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/battery__f9km4l6jlv6u_medium_2x.jpg',
		sourceLarge: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/battery__f9km4l6jlv6u_large.jpg',
		sourceXLarge: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/battery__f9km4l6jlv6u_xlarge_2x.jpg',
	},
	{
		img: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/innovation__b03hhgj3xx9e_xlarge.jpg',
		sourceSmall: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/innovation__b03hhgj3xx9e_small_2x.jpg',
		sourceMedium: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/innovation__b03hhgj3xx9e_medium_2x.jpg',
		sourceLarge: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/innovation__b03hhgj3xx9e_large.jpg',
		sourceXLarge: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/innovation__b03hhgj3xx9e_xlarge_2x.jpg',
	},
	{
		img: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/personalize__f51wh6aiosya_xlarge.jpg',
		sourceSmall: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/personalize__f51wh6aiosya_small_2x.jpg',
		sourceMedium: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/personalize__f51wh6aiosya_medium_2x.jpg',
		sourceLarge: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/personalize__f51wh6aiosya_large.jpg',
		sourceXLarge: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/personalize__f51wh6aiosya_xlarge_2x.jpg',
	},
	{
		img: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/safety__d9zsvrorjfcm_xlarge.jpg',
		sourceSmall: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/safety__d9zsvrorjfcm_small_2x.jpg',
		sourceMedium: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/safety__d9zsvrorjfcm_medium_2x.jpg',
		sourceLarge: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/safety__d9zsvrorjfcm_large.jpg',
		sourceXLarge: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/safety__d9zsvrorjfcm_xlarge_2x.jpg',
	},
	{
		img: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/privacy__cum61s425o6e_xlarge.jpg',
		sourceSmall: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/privacy__cum61s425o6e_small_2x.jpg',
		sourceMedium: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/privacy__cum61s425o6e_medium_2x.jpg',
		sourceLarge: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/privacy__cum61s425o6e_large.jpg',
		sourceXLarge: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/privacy__cum61s425o6e_xlarge_2x.jpg',
	},
	{
		img: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/environment__d1g8uhlvrccy_xlarge.jpg',
		sourceSmall: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/environment__d1g8uhlvrccy_small_2x.jpg',
		sourceMedium: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/environment__d1g8uhlvrccy_medium_2x.jpg',
		sourceLarge: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/environment__d1g8uhlvrccy_large.jpg',
		sourceXLarge: 'https://www.apple.com/v/iphone/home/bt/images/overview/consider/environment__d1g8uhlvrccy_xlarge_2x.jpg',
	},
]
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
