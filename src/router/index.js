import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import development from '@/components/development'
import traceability from '@/components/traceability'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'index', component: index,meta:{title:'象山三农驾驶舱'}},
    {path: '/development', name: 'development', component: development,meta:{title:'农业发展'}},
    {path: '/traceability', name: 'traceability', component: traceability,meta:{title:'防伪溯源'}},
  ]
})
