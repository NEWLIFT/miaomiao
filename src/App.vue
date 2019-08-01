<template>
	  <!-- keep-alive   目的是保持缓存   因为每次点击路由 页面会整体刷新 为减少刷新次数 增加 keep-alive-->
	  <keep-alive>
		   <router-view/>
	  </keep-alive>
</template>