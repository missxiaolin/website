<template>
	<ul>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
		<li>123</li>
	</ul>
	<div class="gallery" ref="galleryRef" :class="isLoaded ? 'gallery-lazy': 'staggered-start'">
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
import { onMounted, ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

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
];

const galleryRef = ref<HTMLElement>();
const isLoaded = ref(false);

// observer: IntersectionObserver
const callback = (entries: IntersectionObserverEntry[]) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting && !isLoaded.value) {
			// 懒加载逻辑
			isLoaded.value = true;
		}
	});
}

onMounted(() => {
	// 懒加载收藏卡片
	useIntersectionObserver(galleryRef.value, callback, {
		// 表示重叠面积占被观察者的比例，从 0 - 1 取值，
		// 1 表示完全被包含
		// 目标元素与根元素的交叉比例，可以是单一的 number 也可以是 number 数组，比如，[0, 0.25, 0.5, 0.75, 1]就表示当目标元素 0%、25%、50%、75%、100% 可见时，会触发回调函数。
		threshold: 0,
		// root：指定根元素，用于检查目标的可见性。必须是目标元素的父级元素。如果未指定或者为null，则默认为浏览器视窗。
		// rootMargin：根元素的外边距，类似于 CSS 中的margin属性。
	});
});

</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
