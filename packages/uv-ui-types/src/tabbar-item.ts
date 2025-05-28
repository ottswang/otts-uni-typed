import type { BaseComponent } from "./_common";

interface TabbarItemProps {
  /**
   * item标签的名称，作为与uv-tabbar的value参数匹配的标识符
   * @default ""
   */
  name?: string | number;
  /**
   * uv-ui内置图标或者绝对路径的图片
   * @default ""
   */
  icon?: string;
  /**
   * 图标大小
   * @default 20
   */
  iconSize?: string | number;
  /**
   * 右上角的角标提示信息
   * @default ""
   */
  badge?: string | number;
  /**
   * 是否显示圆点，将会覆盖badge参数
   * @default false
   */
  dot?: boolean;
  /**
   * 描述文本
   * @default ""
   */
  text?: string;
  /**
   * 控制徽标的位置，对象或者字符串形式，可以设置top和right属性
   * @default "top: 6px; right:2px;"
   */
  badgeStyle?: string | Record<string, any>;
}

interface TabbarItemEvents {
  /**
   * 切换选项时触发
   * @param {string|number} index 当前要切换项的index或name
   */
  ["onClick"]?: (index: string | number) => any;
}

interface _TabbarItem
  extends BaseComponent<TabbarItemProps & TabbarItemEvents> {}

export type {
  TabbarItemProps as UvTabbarItemProps,
  TabbarItemEvents as UvTabbarItemEvents,
  _TabbarItem as UvTabbarItem,
};

declare global {
  namespace UniHelper {
    export type UvTabbarItemProps = TabbarItemProps;
    export type UvTabbarItemEvents = TabbarItemEvents;
    export type UvTabbarItem = _TabbarItem;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvTabbarItem: _TabbarItem;
  }
}
