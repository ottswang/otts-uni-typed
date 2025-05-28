import type { BaseComponent } from "./_common";

interface TabbarProps {
  /**
   * 当前匹配项的index。TabBarItem设置了name属性则匹配的name
   * @default ""
   */
  value?: string | number;
  /**
   * 是否为iPhoneX留出底部安全距离
   * @default true
   */
  safeAreaInsetBottom?: boolean;
  /**
   * 是否显示上方边框
   * @default true
   */
  border?: boolean;
  /**
   * 元素层级z-index
   * @default 1
   */
  zIndex?: string | number;
  /**
   * 选中标签的颜色
   * @default "#1989fa"
   */
  activeColor?: string;
  /**
   * 未选中标签的颜色
   * @default "#7d7e80"
   */
  inactiveColor?: string;
  /**
   * 是否固定在底部
   * @default true
   */
  fixed?: boolean;
  /**
   * fixed定位固定在底部时，是否生成一个等高元素防止塌陷
   * @default true
   */
  placeholder?: boolean;
  /**
   * 图标大小，自定义图片图标设置该属性无效
   * @default 20
   */
  iconSize?: string | number;
  /**
   * 自定义样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface TabbarEvents {
  /**
   * 切换选项时触发
   * @param {string|number} index 当前要切换项的index或name
   */
  ["onChange"]?: (index: string | number) => any;
}

interface _Tabbar extends BaseComponent<TabbarProps & TabbarEvents> {}

export type {
  TabbarProps as UvTabbarProps,
  TabbarEvents as UvTabbarEvents,
  _Tabbar as UvTabbar,
};

declare global {
  namespace UniHelper {
    export type UvTabbarProps = TabbarProps;
    export type UvTabbarEvents = TabbarEvents;
    export type UvTabbar = _Tabbar;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvTabbar: _Tabbar;
  }
}
