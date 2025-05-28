import type { BaseComponent, Direction, LinkType } from "./_common";
import type { UvBadgeProps } from "./badge";
import type { UvIconProps } from "./icon";

type ListItemEllipsis = 0 | 1 | 2;
type ListItemSize = "lg" | "medium" | "sm";

interface ListItemProps {
  /**
   * 是否显示边框
   * @default false
   */
  border?: boolean;
  /**
   * 标题
   * @default ""
   */
  title?: string;
  /**
   * 描述
   * @default ""
   */
  note?: string;
  /**
   * title 是否溢出隐藏
   * @default 0
   */
  ellipsis?: ListItemEllipsis;
  /**
   * 左侧缩略图，若thumb有值，则不会显示扩展图标
   * @default ""
   */
  thumb?: string;
  /**
   * 略缩图尺寸
   * @default "medium"
   */
  thumbSize?: ListItemSize;
  /**
   * 是否显示数字角标
   * @default false
   */
  showBadge?: boolean;
  /**
   * 数字角标参数
   * @default ""
   */
  badge?: UvBadgeProps;
  /**
   * 右侧文字内容
   * @default ""
   */
  rightText?: string;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否显示箭头图标
   * @default false
   */
  showArrow?: boolean;
  /**
   * 新页面跳转方式
   * @default "navigateTo"
   */
  link?: LinkType;
  /**
   * 新页面跳转地址，如填写此属性，click 会返回页面是否跳转成功
   * @default ""
   */
  to?: string;
  /**
   * 是否开启点击反馈
   * @default false
   */
  clickable?: boolean;
  /**
   * 是否显示Switch
   * @default false
   */
  showSwitch?: boolean;
  /**
   * Switch是否被选中
   * @default false
   */
  switchChecked?: boolean;
  /**
   * 左侧是否显示扩展图标
   * @default false
   */
  showExtraIcon?: boolean;
  /**
   * 扩展图标参数
   * @default ""
   */
  extraIcon?: UvIconProps;
  /**
   * 排版方向
   * @default "row"
   */
  direction?: Direction;
  /**
   * 自定义外部样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface ListItemEvents {
  /**
   * 点击 uv-list-item 触发事件，需开启点击反馈：:clickable="true"
   */
  ["onClick"]?: () => any;
  /**
   * 点击切换 Switch 时触发，需显示 switch
   */
  ["onSwitchChange"]?: (...args: any[]) => any;
  /**
   * nvue模式，滚动时触发
   */
  ["onScroll"]?: (...args: any[]) => any;
  /**
   * nvue模式，滚动到底部触发
   */
  ["onScrolltolower"]?: () => any;
}

interface ListItemSlots {
  /**
   * 默认插槽，完全自定义内容时推荐该方式
   */
  ["default"]?: () => any;
  /**
   * 左/上内容插槽，可完全自定义默认显示
   */
  ["header"]?: () => any;
  /**
   * 中间内容插槽，可完全自定义中间内容
   */
  ["body"]?: () => any;
  /**
   * 右/下内容插槽，可完全自定义右侧内容
   */
  ["footer"]?: () => any;
}

interface _ListItem
  extends BaseComponent<ListItemProps & ListItemEvents, ListItemSlots> {}

export type {
  ListItemProps as UvListItemProps,
  ListItemEvents as UvListItemEvents,
  _ListItem as UvListItem,
};

declare global {
  namespace UniHelper {
    export type UvListItemProps = ListItemProps;
    export type UvListItemEvents = ListItemEvents;
    export type UvListItem = _ListItem;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvListItem: _ListItem;
  }
}
