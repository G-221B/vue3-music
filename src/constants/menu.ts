import type { IMenuList } from '@/types/menu';
import { Page } from './page';

export const MenuList: IMenuList = [
    {
        name: '在线音乐',
        childs: [
            {
                key: Page.recommend,
                name: '推荐'
            },
            {
                key: Page.musicLib,
                name: '音乐馆'
            },
            {
                key: Page.video,
                name: '视频'
            },
            {
                key: Page.radio,
                name: '电台'
            }
        ]
    },
    {
        name: '我的音乐',
        childs: [
            {
                key: Page.hobby,
                name: '我喜欢'
            },
            {
                key: Page.local,
                name: '本地歌曲'
            },
            {
                key: Page.download,
                name: '下载音乐'
            },
            {
                key: Page.recently,
                name: '最近播放'
            }
        ]
    }
];
