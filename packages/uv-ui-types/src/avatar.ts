import type { BaseComponent, ImageMode, Shape } from "./_common";

interface AvatarProps {
  /**
   * 头像路径，如加载失败，将会显示默认头像(不能为相对路径)
   * @default ""
   */
  src?: string;
  /**
   * 头像形状
   * @default "circle"
   */
  shape?: Shape;
  /**
   * 头像尺寸，可以为指定字符串(large, default, mini)，或者数值
   * @default 40
   */
  size?: string | number;
  /**
   * 头像图片的裁剪类型，与uni的image组件的mode参数一致，如效果达不到需求，可尝试传widthFix值
   * @default "scaleToFill"
   */
  mode?: ImageMode;
  /**
   * 用文字替代图片，级别优先于src
   * @default ""
   */
  text?: string;
  /**
   * 背景颜色，一般显示文字时用
   * @default "#c0c4cc"
   */
  bgColor?: string;
  /**
   * 文字颜色
   * @default "#ffffff"
   */
  color?: string;
  /**
   * 文字大小
   * @default 18
   */
  fontSize?: string | number;
  /**
   * 显示的图标
   * @default ""
   */
  icon?: string;
  /**
   * 显示小程序头像，只对百度，微信，QQ小程序有效
   * @default false
   */
  mpAvatar?: boolean;
  /**
   * 是否使用随机背景色
   * @default false
   */
  randomBgColor?: boolean;
  /**
   * 加载失败的默认头像(组件有内置默认图片)
   * @default ""
   */
  defaultUrl?: string;
  /**
   * 如果配置了randomBgColor为true，且配置了此值，则从默认的背景色数组中取出对应索引的颜色值，取值0-19之间
   * @default ""
   */
  colorIndex?: string | number;
  /**
   * 组件标识符
   * @default "level"
   */
  name?: string;
  /**
   * 自定义外部样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface AvatarEvents {
  /**
   * 头像被点击
   * @param {string} index 用户传递的标识符
   */
  ["onClick"]?: (index: string) => any;
}

interface _Avatar extends BaseComponent<AvatarProps & AvatarEvents> {}

export type {
  AvatarProps as UvAvatarProps,
  AvatarEvents as UvAvatarEvents,
  _Avatar as UvAvatar,
};

declare global {
  namespace UniHelper {
    export type UvAvatarProps = AvatarProps;
    export type UvAvatarEvents = AvatarEvents;
    export type UvAvatar = _Avatar;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvAvatar: _Avatar;
  }
}
