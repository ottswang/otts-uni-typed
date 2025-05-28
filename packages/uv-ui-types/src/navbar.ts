import type { BaseComponent, ImageMode } from "./_common";

interface NavbarProps {
  /**
   * 导航栏标题，如设置为空字符，将会隐藏标题占位区域
   * @default ""
   */
  title?: string;
  /**
   * 是否开启顶部安全区适配
   * @default true
   */
  safeAreaInsetTop?: boolean;
  /**
   * 固定在顶部时，是否生成一个等高元素，以防止塌陷
   * @default false
   */
  placeholder?: boolean;
  /**
   * 导航栏是否固定在顶部
   * @default true
   */
  fixed?: boolean;
  /**
   * 导航栏底部是否显示下边框
   * @default false
   */
  border?: boolean;
  /**
   * 左边返回图标的名称，只能为uv-ui自带的图标
   * @default "arrow-left"
   */
  leftIcon?: string;
  /**
   * 左边的提示文字
   * @default ""
   */
  leftText?: string;
  /**
   * 右边的提示文字
   * @default ""
   */
  rightText?: string;
  /**
   * 右边返回图标的名称，只能为uv-ui自带的图标
   * @default ""
   */
  rightIcon?: string;
  /**
   * 导航栏背景设置，支持渐变色，支持图片背景
   * @default "#ffffff"
   */
  bgColor?: string;
  /**
   * bgColor为图片时，可以通过此属性设置裁剪模式
   * @default "aspectFill"
   */
  imgMode?: ImageMode;
  /**
   * 导航栏标题的最大宽度，内容超出会以省略号隐藏，单位px(rpx)
   * @default "400px"
   */
  titleWidth?: string | number;
  /**
   * 导航栏高度(不包括状态栏高度在内，内部自动加上)，单位px(rpx)
   * @default "44px"
   */
  height?: string | number;
  /**
   * 左侧返回图标的大小
   * @default "20px"
   */
  leftIconSize?: string | number;
  /**
   * 左侧返回图标的颜色
   * @default "#303133"
   */
  leftIconColor?: string;
  /**
   * 点击左侧区域(返回图标)，是否自动返回上一页
   * @default false
   */
  autoBack?: boolean;
  /**
   * 标题的样式，对象或字符串形式
   * @default ""
   */
  titleStyle?: string | Record<string, any>;
}

interface NavbarEvents {
  /**
   * 点击左侧区域
   */
  ["onLeftClick"]?: () => any;
  /**
   * 点击右侧区域
   */
  ["onRightClick"]?: () => any;
}

interface NavbarSlots {
  /**
   * 自定义左侧部分内容
   */
  ["left"]?: () => any;
  /**
   * 自定义右侧部分内容
   */
  ["right"]?: () => any;
  /**
   * 自定义中部内容
   */
  ["center"]?: () => any;
}

interface _Navbar
  extends BaseComponent<NavbarProps & NavbarEvents, NavbarSlots> {}

export type {
  NavbarProps as UvNavbarProps,
  NavbarEvents as UvNavbarEvents,
  _Navbar as UvNavbar,
};

declare global {
  namespace UniHelper {
    export type UvNavbarProps = NavbarProps;
    export type UvNavbarEvents = NavbarEvents;
    export type UvNavbar = _Navbar;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvNavbar: _Navbar;
  }
}
