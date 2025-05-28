import type { BaseComponent } from "./_common";

interface TabsProps {
  /**
   * 滑块移动一次所需的时间，单位ms
   * @default 300
   */
  duration?: string | number;
  /**
   * 标签数组，元素为对象
   * @default ""
   */
  list?: Record<string, any>[];
  /**
   * 滑块颜色
   * @default "#3c9cff"
   */
  lineColor?: string;
  /**
   * 菜单选择中时的样式
   * @default "{ color: '#303133' }"
   */
  activeStyle?: string | Record<string, any>;
  /**
   * 菜单非选中时的样式
   * @default "{ color: '#606266' }"
   */
  inactiveStyle?: string | Record<string, any>;
  /**
   * 滑块长度
   * @default 20
   */
  lineWidth?: string | number;
  /**
   * 滑块高度
   * @default 3
   */
  lineHeight?: string | number;
  /**
   * 滑块背景显示大小，当滑块背景设置为图片时使用
   * @default "cover"
   */
  lineBgSize?: string;
  /**
   * 菜单item的样式
   * @default "{ height: '44px' }"
   */
  itemStyle?: string | Record<string, any>;
  /**
   * 菜单是否可滚动，**选项很少的时候设置为false整个tabs自动居中显示**
   * @default true
   */
  scrollable?: boolean;
  /**
   * 当前选中标签的索引
   * @default 0
   */
  current?: string | number;
  /**
   * 从list元素对象中读取的键名
   * @default "name"
   */
  keyName?: string;
  /**
   * 自定义样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface TabsEvents {
  /**
   * 点击标签时触发
   * @param {number} index 标签索引值
   * @param {any} item 传入的其他值
   */
  ["onClick"]?: (index: number, item: any) => any;
  /**
   * 标签索引改变时触发(disalbed时不会触发)
   * @param {number} index 标签索引值
   * @param {any} item 传入的其他值
   */
  ["onChange"]?: (index: number, item: any) => any;
}

interface _Tabs extends BaseComponent<TabsProps & TabsEvents> {}

export type {
  TabsProps as UvTabsProps,
  TabsEvents as UvTabsEvents,
  _Tabs as UvTabs,
};

declare global {
  namespace UniHelper {
    export type UvTabsProps = TabsProps;
    export type UvTabsEvents = TabsEvents;
    export type UvTabs = _Tabs;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvTabs: _Tabs;
  }
}
