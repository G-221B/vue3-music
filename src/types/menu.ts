interface TMenuList {
    name: string;
    childs: TMenu[];
}
interface TMenu {
    name: string;
    key: string;
    iconName: string;
}
export type IMenuList = TMenuList[];
