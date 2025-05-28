import type { BaseComponent } from "./_common";

interface StickyProps {
  /**
   * 吸顶时与顶部的距离，单位px(rpx)
   * @default 0
   */
  offsetTop?: string | number;
  /**
   * 导航栏高度，自定义导航栏时，需要传入此值
   * @default 0
   */
  customNavHeight?: string | number;
  /**
   * 是否禁用吸顶功能
   * @default false
   */
  disabled?: boolean;
  /**
   * 组件背景颜色
   * @default "#ffffff"
   */
  bgColor?: string;
  /**
   * 吸顶时的z-index值，NVUE无效
   * @default ""
   */
  zIndex?: string | number;
  /**
   * 自定义标识，用于区分是哪一个组件
   * @default ""
   */
  index?: string | number;
}

interface _Sticky extends BaseComponent<StickyProps> {}

export type { StickyProps as UvStickyProps, _Sticky as UvSticky };

declare global {
  namespace UniHelper {
    export type UvStickyProps = StickyProps;
    export type UvSticky = _Sticky;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvSticky: _Sticky;
  }
}
