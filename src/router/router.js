import VueRouter from 'vue-router'

// 引入底部列表栏模块
import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemberContainer from '../components/tabbar/MemberContainer.vue'
import ShopcarContainer from '../components/tabbar/ShopcarContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'
import newsList from '../components/news/newslist.vue'
import newifo from '../components/news/newsinfo.vue'
import photolist from '../components/photo/photoList.vue'
import photoinfo from '../components/photo/infolist.vue'
import goodlist from '../components/goods/goodList.vue'
import goodinfo from '../components/goods/goodsinfo.vue'
import gooddesc from '../components/goods/goodDesc.vue'
import goodcomment from '../components/goods/goodcomment.vue'
const router=new VueRouter({
    routes:[
        {path:"/",redirect:'/home'},
        {path:"/home",component:HomeContainer},
        {path:"/member",component:MemberContainer},
        {path:"/shopcar",component:ShopcarContainer},
        {path:"/search",component:SearchContainer},
        {path:"/home/newslist",component:newsList},
        {path:"/home/newsinfo",component:newifo},
        {path:"/home/photolist",component:photolist},
        {path:"/home/photoinfo",component: photoinfo},
        {path:"/home/goodlist",component: goodlist},
        {path:"/home/goodsinfo",component:goodinfo},
        {path:"/home/gooddesc/",component:gooddesc},
        {path:"/home/goodcomment",component:goodcomment}
    ],
    linkActiveClass:'mui-active'
})

export default router