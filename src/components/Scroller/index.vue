<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    name : 'Scroller',
	data(){
	    return {
	        options: {
			  pullDownRefresh: {
				threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
				stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
			  },
			  pullUpLoad: {
				threshold: -20 // 在上拉到超过底部 20px 时，触发 pullingUp 事件
			  },
	//          pullDownRefresh: false, //关闭下拉
	//          pullUpLoad: false, // 关闭上拉
			  click: true,
			  tap : true,
			  probeType:1,
			  startY: 0,
			  scrollbar: false
			}
	    }
	},
    props : {
        setAddDataNew : {
            type : Function,
            default : function(){}
        },
        setDataUpdate : {
            type : Function,
            default : function(){}
        }
    },
    mounted(){
        var scroll = new BScroll(this.$refs.wrapper, this.options)

        this.scroll = scroll;
		// 下拉
		this.scroll.on('pullingDown', () => {
			this.setDataUpdate();
			this.pullingDownUp()
		})
		// 上拉
		this.scroll.on('pullingUp', () => {
			this.setAddDataNew();
			this.pullingDownUp()
		})
    },
    methods : {
        toScrollTop(y){
            this.scroll.scrollTo(0,y);
        },
		pullingDownUp () {
		  this.scroll.finishPullDown()
		  this.scroll.finishPullUp()
		  this.scroll.refresh() //重新计算元素高度
		},
    }
}
</script>

<style scoped>
    .wrapper{ height:100%;}
</style>
