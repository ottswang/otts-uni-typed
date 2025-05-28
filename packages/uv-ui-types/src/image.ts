import type { BaseComponent, ImageMode, Shape } from "./_common";

interface ImageProps {
  /**
   * 图片地址，**强烈建议**使用绝对或者网络路径
   * @default ""
   */
  src?: string;
  /**
   * 裁剪模式
   * @default "aspectFill"
   */
  mode?: ImageMode;
  /**
   * 宽度，单位任意，如果为数值，默认单位px(rpx)
   * @default 300
   */
  width?: string | number;
  /**
   * 高度，单位任意，如果为数值，默认单位px(rpx)
   * @default 225
   */
  height?: string | number;
  /**
   * 图片形状
   * @default "square"
   */
  shape?: Shape;
  /**
   * 圆角，默认单位px
   * @default 0
   */
  radius?: string | number;
  /**
   * 是否懒加载，仅微信小程序、App、百度小程序、字节跳动小程序有效
   * @default false
   */
  lazyLoad?: boolean;
  /**
   * 是否observer懒加载，在该图片滑动到可视范围内的时候才会去请求加载图片。nvue页面不生效。
   * @default false
   */
  observeLazyLoad?: boolean;
  /**
   * 是否开启长按图片显示识别小程序码菜单，仅微信小程序有效
   * @default true
   */
  showMenuByLongpress?: boolean;
  /**
   * 加载中的图标，或者小图片
   * @default "photo"
   */
  loadingIcon?: string;
  /**
   * 加载失败的图标，或者小图片
   * @default "error-circle"
   */
  errorIcon?: string;
  /**
   * 是否显示加载中的图标或者自定义的slot
   * @default true
   */
  showLoading?: boolean;
  /**
   * 是否显示加载错误的图标或者自定义的slot
   * @default true
   */
  showError?: boolean;
  /**
   * 是否需要淡入效果
   * @default true
   */
  fade?: boolean;
  /**
   * 只支持网络资源，只对微信小程序有效
   * @default false
   */
  webp?: boolean;
  /**
   * 搭配fade参数的过渡时间，单位ms
   * @default 500
   */
  duration?: string | number;
  /**
   * 背景颜色，用于深色页面加载图片时，为了和背景色融合
   * @default "#f3f4f6"
   */
  bgColor?: string;
  /**
   * 是否属于cell节点下。nvue模式下的该组件在cell或uv-list等组件下使用，该值最好是设置成true，避免回收后不显示的BUG。
   * @default false
   */
  cellChild?: boolean;
  /**
   * 自定义样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface ImageEvents {
  /**
   * 点击图片时触发
   */
  ["onClick"]?: () => any;
  /**
   * 图片加载失败时触发
   * @param {any} err 错误信息
   */
  ["onError"]?: (err: any) => any;
  /**
   * 图片加载成功时触发
   */
  ["onLoad"]?: () => any;
}

interface ImageSlots {
  /**
   * 自定义加载中的提示内容
   */
  ["loading"]?: () => any;
  /**
   * 自定义失败的提示内容
   */
  ["error"]?: () => any;
}

interface _Image extends BaseComponent<ImageProps & ImageEvents, ImageSlots> {}

export type {
  ImageProps as UvImageProps,
  ImageEvents as UvImageEvents,
  _Image as UvImage,
};

declare global {
  namespace UniHelper {
    export type UvImageProps = ImageProps;
    export type UvImageEvents = ImageEvents;
    export type UvImage = _Image;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvImage: _Image;
  }
}
