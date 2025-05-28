import type { BaseComponent } from "./_common";

interface StatusBarProps {
  /**
   * 背景色
   * @default "transparent"
   */
  bgColor?: string;
  /**
   * 自定义外部样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface StatusBarSlots {
  /**
   * 自定义内容
   */
  ["default"]?: () => any;
}

interface _StatusBar extends BaseComponent<StatusBarProps, StatusBarSlots> {}

export type {
  StatusBarProps as UvStatusBarProps,
  StatusBarSlots as UvStatusBarSlots,
  _StatusBar as UvStatusBar,
};

declare global {
  namespace UniHelper {
    export type UvStatusBarProps = StatusBarProps;
    export type UvStatusBarSlots = StatusBarSlots;
    export type UvStatusBar = _StatusBar;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvStatusBar: _StatusBar;
  }
}
