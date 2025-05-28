import type { BaseComponent } from "./_common";

interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

interface PickColorProps {
  /**
   * 颜色选择器初始颜色
   * @default { r: 0, g: 0, b: 0, a: 0 }
   */
  color?: Color;
  /**
   * 底部预制颜色
   * @default ""
   */
  prefabColor?: Color[];
  /**
   * 是否允许点击遮罩关闭
   * @default false
   */
  closeOnClickOverlay?: boolean;
  /**
   * 顶部标题
   * @default ""
   */
  title?: string;
  /**
   * 取消按钮的文字
   * @default "取消"
   */
  cancelText?: string;
  /**
   * 确认按钮的文字
   * @default "确定"
   */
  confirmText?: string;
  /**
   * 取消按钮的颜色
   * @default "#909193"
   */
  cancelColor?: string;
  /**
   * 确认按钮的颜色
   * @default "#3c9cff"
   */
  confirmColor?: string;
}

interface PickColorEvents {
  /**
   * 点击确定按钮触发，返回颜色值，eg：{hex: "#000000",rgba:{r:0,g:0,b:0,a:0}}
   */
  ["onConfirm"]?: (...args: any[]) => any;
  /**
   * 点击取消按钮触发
   */
  ["onCancel"]?: () => any;
  /**
   * 该组件关闭时触发
   */
  ["onClose"]?: () => any;
}

interface _PickColor extends BaseComponent<PickColorProps & PickColorEvents> {}

interface PickColorInstance {
  /**
   * 弹出颜色选择组件
   */
  open: () => any;
  /**
   * 关闭颜色选择组件
   */
  close: () => any;
}

export type {
  PickColorProps as UvPickColorProps,
  PickColorEvents as UvPickColorEvents,
  _PickColor as UvPickColor,
  PickColorInstance as UvPickColorInstance,
};

declare global {
  namespace UniHelper {
    export type UvPickColorProps = PickColorProps;
    export type UvPickColorEvents = PickColorEvents;
    export type UvPickColor = _PickColor;
    export type UvPickColorInstance = PickColorInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvPickColor: _PickColor;
  }
}
