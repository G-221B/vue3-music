interface TMenuList {
    name: string;
    childs: TMenu[];
}
interface TMenu {
    name: string;
    key: string;
    icon?: string;
}
export type IMenuList = TMenuList[];
