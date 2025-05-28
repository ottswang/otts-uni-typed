import type { BaseComponent } from "./_common";

type EmptyMode =
  | "car"
  | "page"
  | "search"
  | "address"
  | "wifi-off"
  | "order"
  | "coupon"
  | "favor"
  | "permission"
  | "history"
  | "news"
  | "message"
  | "list"
  | "data";

interface EmptyProps {
  /**
   * 内置图标名称，或图片路径，建议绝对路径，支持base64图片
   * @default ""
   */
  icon?: string;
  /**
   * 文字提示
   * @default ""
   */
  text?: string;
  /**
   * 文字颜色
   * @default "#c0c4cc"
   */
  textColor?: string;
  /**
   * 文字大小
   * @default 14
   */
  textSize?: string | number;
  /**
   * 图标的颜色
   * @default "#c0c4cc"
   */
  iconColor?: string;
  /**
   * 图标的大小
   * @default 90
   */
  iconSize?: string | number;
  /**
   * 内置的图标
   * @default "data"
   */
  mode?: EmptyMode;
  /**
   * 图标的宽度，单位px
   * @default 160
   */
  width?: string | number;
  /**
   * 图标的高度，单位px
   * @default 160
   */
  height?: string | number;
  /**
   * 是否显示组件
   * @default true
   */
  show?: boolean;
  /**
   * 组件到上一个元素的间距,单位px
   * @default 0
   */
  marginTop?: string | number;
}

interface EmptySlots {
  /**
   * 给组件底部传入slot内容
   */
  ["default"]?: () => any;
}

interface _Empty extends BaseComponent<EmptyProps, EmptySlots> {}

export type {
  EmptyMode as UvEmptyMode,
  EmptyProps as UvEmptyProps,
  _Empty as UvEmpty,
};

declare global {
  namespace UniHelper {
    export type UvEmptyMode = EmptyMode;
    export type UvEmptyProps = EmptyProps;
    export type UvEmpty = _Empty;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvEmpty: _Empty;
  }
}
