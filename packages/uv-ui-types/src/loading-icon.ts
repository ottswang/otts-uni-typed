import type { BaseComponent, LoadingMode } from "./_common";

interface LoadingIconProps {
  /**
   * 是否显示动画
   * @default true
   */
  show?: boolean;
  /**
   * 图标颜色
   * @default "#909193"
   */
  color?: string;
  /**
   * 提示文本颜色
   * @default "#909193"
   */
  textColor?: string;
  /**
   * 图标和文字是否垂直排列
   * @default false
   */
  vertical?: boolean;
  /**
   * 模式选择
   * @default "circle"
   */
  mode?: LoadingMode;
  /**
   * 加载图标的大小，默认单位px
   * @default 24
   */
  size?: string | number;
  /**
   * 加载文字的大小，默认单位px
   * @default 15
   */
  textSize?: string | number;
  /**
   * 文字内容
   * @default ""
   */
  text?: string;
  /**
   * 文字样式
   * @default ""
   */
  textStyle?: Record<string, any>;
  /**
   * 指定animation-timing-function的css属性，但只支持mode为circle或semicircle才有效
   * @link https://www.runoob.com/cssref/css3-pr-animation-timing-function.html
   */
  timingFunction?: string;
  /**
   * 动画执行周期时间，单位ms
   * @default 1200
   */
  duration?: string | number;
  /**
   * 图标的暗边颜色, mode为circle 模式有效
   * @default "transparent"
   */
  inactiveColor?: string;
}

interface _LoadingIcon extends BaseComponent<LoadingIconProps> {}

export type {
  LoadingIconProps as UvLoadingIconProps,
  _LoadingIcon as UvLoadingIcon,
};

declare global {
  namespace UniHelper {
    export type UvLoadingIconProps = LoadingIconProps;
    export type UvLoadingIcon = _LoadingIcon;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvLoadingIcon: _LoadingIcon;
  }
}
