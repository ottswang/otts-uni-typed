import type { BaseComponent, ColorType } from "./_common";

interface NotifyShowParams {
  /**
   * 到顶部的距离
   * @default 0
   */
  top?: string | number;
  /**
   * 主题
   */
  type?: ColorType;
  /**
   * 字体颜色
   * @default "#ffffff"
   */
  color?: string;
  /**
   * 背景颜色
   * @default ""
   */
  bgColor?: string;
  /**
   * 展示的文字内容
   * @default ""
   */
  message?: string;
  /**
   * 展示时长，为0时不消失，单位ms
   * @default 3000
   */
  duration?: string | number;
  /**
   * 字体大小，单位px（rpx）
   * @default 15
   */
  fontSize?: string | number;
  /**
   * 是否留出顶部安全距离（状态栏高度）
   * @default false
   */
  safeAreaInsetTop?: boolean;
}

interface NotifyProps {
  /**
   * 到顶部的距离
   */
  top?: string | number;
  /**
   * 主题
   * @default "primary"
   */
  type?: ColorType;
  /**
   * 字体颜色
   * @default "#ffffff"
   */
  color?: string;
  /**
   * 背景颜色
   * @default ""
   */
  bgColor?: string;
  /**
   * 展示的文字内容
   * @default ""
   */
  message?: string;
  /**
   * 展示时长，为0时不消失，单位ms
   * @default 3000
   */
  duration?: string | number;
  /**
   * 字体大小，单位px（rpx）
   * @default 15
   */
  fontSize?: string | number;
  /**
   * 是否留出顶部安全距离（状态栏高度）
   * @default false
   */
  safeAreaInsetTop?: boolean;
  /**
   * 自定义外部样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface NotifySlots {
  /**
   * 自定义图标
   */
  ["icon"]?: () => any;
}

interface _Notify extends BaseComponent<NotifyProps, NotifySlots> {}

interface NotifyInstance {
  /**
   * 显示并加载配置
   */
  show: (params: NotifyShowParams) => any;
  /**
   * 显示当前主题消息提示
   * @param {string} message 展示的文字内容
   */
  primary: (message: string) => any;
  /**
   * 显示当前主题消息提示
   * @param {string} message 展示的文字内容
   */
  success: (message: string) => any;
  /**
   * 显示当前主题消息提示
   * @param {string} message 展示的文字内容
   */
  warning: (message: string) => any;
  /**
   * 显示当前主题消息提示
   * @param {string} message 展示的文字内容
   */
  error: (message: string) => any;
  /**
   * 关闭消息提示
   */
  close: () => any;
}

export type {
  NotifyProps as UvNotifyProps,
  _Notify as UvNotify,
  NotifyInstance as UvNotifyInstance,
};

declare global {
  namespace UniHelper {
    export type UvNotifyProps = NotifyProps;
    export type UvNotify = _Notify;
    export type UvNotifyInstance = NotifyInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvNotify: _Notify;
  }
}
