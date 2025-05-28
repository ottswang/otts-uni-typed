import type { BaseComponent, ColorType, Effect } from "./_common";

interface AlertProps {
  /**
   * 显示的文字
   * @default ""
   */
  title?: string;
  /**
   * 使用预设的颜色
   * @default "warning"
   */
  type?: ColorType;
  /**
   * 辅助性文字，颜色比title浅一点，字号也小一点，可选
   * @default ""
   */
  description?: string;
  /**
   * 关闭按钮(默认为叉号icon图标)
   * @default false
   */
  closable?: boolean;
  /**
   * 是否显示左边的辅助图标
   * @default false
   */
  showIcon?: boolean;
  /**
   * 主题
   */
  effect?: Effect;
  /**
   * 文字是否居中
   * @default false
   */
  center?: boolean;
  /**
   * 字体大小，单位rpx或px
   * @default 14
   */
  fontSize?: string | number;
  /**
   * 自定义外部样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface AlertEvents {
  /**
   * 点击组件时触发
   */
  ["onClick"]?: () => any;
}

interface _Alert extends BaseComponent<AlertProps & AlertEvents> {}

export type {
  AlertProps as UvAlertProps,
  AlertEvents as UvAlertEvents,
  _Alert as UvAlert,
};

declare global {
  namespace UniHelper {
    export type UvAlertProps = AlertProps;
    export type UvAlertEvents = AlertEvents;
    export type UvAlert = _Alert;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvAlert: _Alert;
  }
}
