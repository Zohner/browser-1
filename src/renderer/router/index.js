import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
console.log(history)
export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: require('@/view/Login').default
        },
        {
            path: '/',
            name: 'index',
            redirect: '/home',
            component: require('@/view/Index').default,
            children: [
                {
                    path: '/home',
                    name: 'home',
                    redirect: '/feed',
                    component: require('@/view/Home').default,
                    children: [
                        {
                            path: '/feed',
                            name: 'feed',
                            component: require('@/components/Main/Feed').default
                        },
                        {
                            path: '/user',
                            name: 'user',
                            component: require('@/components/Main/Feed').default
                        },
                        {
                            path: '/requests/:type',
                            name: 'requests',
                            component: require('@/components/Main/Requests')
                                .default
                        },
                        {
                            path: '/recommend/group',
                            name: 'group',
                            component: require('@/components/Main/RecommendDetails')
                                .default
                        },
                        {
                            path: '/recommend/friends',
                            name: 'friends',
                            component: require('@/components/Main/RecommendDetails')
                                .default
                        },
                        {
                            path: '/dynamic',
                            name: 'dynamic',
                            component: require('@/components/Main/DynamicNotify')
                                .default
                        },
                        {
                            path: '/search',
                            name: 'search',
                            component: require('@/components/Main/FeedSearch')
                                .default
                        }
                    ]
                },

                {
                    path: '/userSetting',
                    name: 'settings',
                    component: require('@/view/UserSetting').default,
                    children: [
                        {
                            path: '/userSetting',
                            name: 'setting',
                            component: require('@/components/User/UserSetting')
                                .default
                        },
                        {
                            path: '/userHelp',
                            name: 'help',
                            component: require('@/components/User/UserHelp')
                                .default
                        },
                        {
                            path: '/userLang',
                            name: 'lang',
                            component: require('@/components/User/UserLang')
                                .default
                        },
                        {
                            path: '/userPrivacy',
                            name: 'privacy',
                            component: require('@/components/User/UserPrivacy')
                                .default
                        }
                    ]
                },
                {
                    path: '/collection/:type/:index',
                    name: 'collection',
                    component: require('@/components/Collection/Pages').default
                },
                {
                    path: '/cloud',
                    name: 'cloud',
                    component: require('@/view/Cloud').default
                },
                {
                    path: '/wallet',
                    name: 'wallet',
                    redirect: '/personalWorks',
                    component: require('@/view/Wallet').default,
                    children: [
                        {
                            path: '/myWallet',
                            name: 'myWallet',
                            component: require('@/components/Wallet/MyWallet')
                                .default
                        },
                        {
                            path: '/personalWorks',
                            name: 'personalWorks',
                            component: require('@/components/Wallet/PersonalWorks')
                                .default
                        },
                        {
                            path: '/giveSet',
                            name: 'giveSet',
                            component: require('@/components/Wallet/GiveSet')
                                .default
                        },
                        {
                            path: '/bill',
                            name: 'bill',
                            component: require('@/components/Wallet/Bill')
                                .default
                        }
                    ]
                }
            ]
        },

        {
            path: '*',
            redirect: '/'
        }
    ]
})
