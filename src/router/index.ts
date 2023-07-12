import { createRouter, createWebHashHistory } from 'vue-router';
import { Page } from '@/constants/page';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/recommend'
        },
        {
            name: Page.recommend,
            path: '/recommend',
            component: import('@/pages/Recommend/index.vue')
        },
        {
            name: Page.musicLib,
            path: '/musicLib',
            component: import('@/pages/MusicLib/index.vue')
        },
        {
            name: Page.video,
            path: '/video',
            component: import('@/pages/Video/index.vue')
        },
        {
            name: Page.radio,
            path: '/radio',
            component: import('@/pages/Radio/index.vue')
        },
        {
            name: Page.hobby,
            path: '/hobby',
            component: import('@/pages/Hobby/index.vue')
        },
        {
            name: Page.local,
            path: '/local',
            component: import('@/pages/Local/index.vue')
        },
        {
            name: Page.download,
            path: '/download',
            component: import('@/pages/Download/index.vue')
        },
        {
            name: Page.recently,
            path: '/recently',
            component: import('@/pages/Recently/index.vue')
        }
    ]
});

export default router;
