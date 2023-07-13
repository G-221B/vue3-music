import type { IMenuList } from '@/types/menu';
import { Page } from './page';

export const MenuList: IMenuList = [
    {
        name: '在线音乐',
        childs: [
            {
                key: Page.recommend,
                name: '推荐',
                iconName: 'icon-recommend'
            },
            {
                key: Page.musicLib,
                name: '音乐馆',
                iconName: 'icon-musicLib'
            },
            {
                key: Page.video,
                name: '视频',
                iconName: 'icon-video'
            },
            {
                key: Page.radio,
                name: '电台',
                iconName: 'icon-radio'
            }
        ]
    },
    {
        name: '我的音乐',
        childs: [
            {
                key: Page.hobby,
                name: '我喜欢',
                iconName: 'icon-hobby'
            },
            {
                key: Page.local,
                name: '本地歌曲',
                iconName: 'icon-local'
            },
            {
                key: Page.download,
                name: '下载音乐',
                iconName: 'icon-download'
            },
            {
                key: Page.recently,
                name: '最近播放',
                iconName: 'icon-recently'
            }
        ]
    }
];
