import type { BaseComponent } from "./_common";

interface CollapseItemProps {
  /**
   * 面板标题
   * @default ""
   */
  title?: string;
  /**
   * 标题右侧内容
   * @default ""
   */
  value?: string;
  /**
   * 是否禁止面板的展开和收起
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否展示右侧箭头并开启点击反馈
   * @default true
   */
  isLink?: boolean;
  /**
   * 是否开启点击反馈
   * @default true
   */
  clickable?: boolean;
  /**
   * 是否显示内边框
   * @default true
   */
  border?: boolean;
  /**
   * 唯一标识符。如不设置，默认用当前collapse-item的索引值
   * @default ""
   */
  name?: string | number;
  /**
   * 标题左侧图标，可为绝对路径的图片或内置图标
   * @default ""
   */
  icon?: string;
  /**
   * 面板展开收起的过渡时间，单位ms
   * @default 300
   */
  duration?: number;
}

interface CollapseItemSlots {
  /**
   * 主体部分的内容
   */
  ["default"]?: () => any;
  /**
   * 标题内容
   */
  ["title"]?: () => any;
  /**
   * 左侧icon
   */
  ["icon"]?: () => any;
  /**
   * 右侧value
   */
  ["value"]?: () => any;
  /**
   * 右侧icon
   */
  ["right-icon"]?: () => any;
}

interface _CollapseItem
  extends BaseComponent<CollapseItemProps, CollapseItemSlots> {}

export type {
  CollapseItemProps as UvCollapseItemProps,
  _CollapseItem as UvCollapseItem,
};

declare global {
  namespace UniHelper {
    export type UvCollapseItemProps = CollapseItemProps;
    export type UvCollapseItem = _CollapseItem;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvCollapseItem: _CollapseItem;
  }
}
