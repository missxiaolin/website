<template>
	<router-view v-slot="{ Component, route }">
		<transition appear name="fade-transform" mode="out-in">
			<keep-alive :include="cacheRouter">
				<component :is="Component" :key="route.path"></component>
			</keep-alive>
		</transition>
	</router-view>
</template>

<script setup lang="ts">
import cacheRouter from "@/routers/cacheRouter";
</script>

<style scoped lang="scss"></style>
