import type { BaseComponent, Shape } from "./_common";

interface BackTopProps {
  /**
   * 按钮形状
   * @default "circle"
   */
  mode?: Shape;
  /**
   * uv-ui内置图标名称，或图片路径
   * @default "arrow-upward"
   */
  icon?: string;
  /**
   * 返回顶部按钮的提示文字
   * @default ""
   */
  text?: string;
  /**
   * 返回顶部过程中的过渡时间，单位ms
   * @default 100
   */
  duration?: string | number;
  /**
   * 页面的滚动距离，通过onPageScroll生命周期获取
   * @default 0
   */
  scrollTop?: string | number;
  /**
   * 滚动条滑动多少距离时显示，单位px(rpx)
   * @default 400
   */
  top?: string | number;
  /**
   * 返回按钮位置到屏幕底部的距离，单位px(rpx)
   * @default 100
   */
  bottom?: string | number;
  /**
   * 返回按钮位置到屏幕右边的距离，单位px(rpx)
   * @default 20
   */
  right?: string | number;
  /**
   * 返回顶部按钮的层级
   * @default 9
   */
  zIndex?: string | number;
  /**
   * 图标的样式，对象形式
   * @default ""
   */
  iconStyle?: Record<string, any>;
  /**
   * 按钮外层的自定义样式
   */
  customStyle?: string | Record<string, any>;
}

interface BackTopSlots {
  /**
   * 自定义返回按钮的所有内容
   */
  ["default"]?: () => any;
}

interface _BackTop extends BaseComponent<BackTopProps, BackTopSlots> {}

interface BackTopInstance {
  /**
   * 自定义内容的时，可以调用此方法返回顶部
   */
  backToTop: () => any;
}

export type {
  BackTopProps as UvBackTopProps,
  _BackTop as UvBackTop,
  BackTopInstance as UvBackTopInstance,
};

declare global {
  namespace UniHelper {
    export type UvBackTopProps = BackTopProps;
    export type UvBackTop = _BackTop;
    export type UvBackTopInstance = BackTopInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvBackTop: _BackTop;
  }
}
