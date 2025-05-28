import type { BaseComponent } from "./_common";

type KeyboardMode = "car" | "number" | "card";

interface KeyboardProps {
  /**
   * 键盘的类型
   * @default "car"
   */
  mode?: KeyboardMode;
  /**
   * 是否显示"."按键，只在mode="number"时有效
   * @default "false"
   */
  dotDisabled?: boolean;
  /**
   * 是否显示键盘顶部工具条
   * @default true
   */
  tooltip?: boolean;
  /**
   * 是否显示工具条中间的提示
   * @default true
   */
  showTips?: boolean;
  /**
   * 工具条中间的提示文字
   * @default ""
   */
  tips?: string;
  /**
   * 是否显示工具条左边的"取消"按钮
   * @default true
   */
  showCancel?: boolean;
  /**
   * 是否显示工具条右边的"完成"按钮
   * @default true
   */
  showConfirm?: boolean;
  /**
   * 是否打乱键盘按键的顺序
   * @default false
   */
  random?: boolean;
  /**
   * 是否开启底部安全区适配
   * @default false
   */
  safeAreaInsetBottom?: boolean;
  /**
   * 是否允许点击遮罩收起键盘
   * @default true
   */
  closeOnClickOverlay?: boolean;
  /**
   * 是否允许点击确认按钮收起键盘
   * @default true
   */
  closeOnClickConfirm?: boolean;
  /**
   * 是否显示遮罩
   * @default true
   */
  overlay?: boolean;
  /**
   * 弹出键盘的z-index值
   * @default 1075
   */
  zIndex?: string | number;
  /**
   * 确认按钮的文字
   * @default "确认"
   */
  confirmText?: string;
  /**
   * 取消按钮的文字
   * @default "取消"
   */
  cancelText?: string;
  /**
   * mode = "car"下，输入文字后，是否自动切换为字母模式
   * @default false
   */
  autoChange?: boolean;
  /**
   * mode = "car"下，被禁用的键，如：['I','O']
   * @default ""
   */
  disKeys?: string[];
  /**
   * mode = "car"下，是否启用自定义中英文切换内容模式，为了兼容支付宝等小程序不兼容嵌套插槽，导致同时显示自定义内容和原始内容
   * @default ""
   */
  customabc?: string[];
  /**
   * 自定义外部样式
   * @default {}
   */
  customStyle?: string | Record<string, any>;
}

interface KeyboardEvents {
  /**
   * 按键被点击(不包含退格键被点击)
   */
  ["onChange"]?: (...args: any[]) => any;
  /**
   * 键盘关闭
   */
  ["onClose"]?: () => any;
  /**
   * 键盘顶部工具条右边的"完成"按钮被点击
   */
  ["onConfirm"]?: () => any;
  /**
   * 键盘顶部工具条左边的"取消"按钮被点击
   */
  ["onCancel"]?: () => any;
  /**
   * 键盘退格键被点击
   */
  ["onBackspace"]?: () => any;
  /**
   * mode = "car"下，调用此方法可以进行切换中英文
   * @description 返回true - 英文模式；false - 中文模式
   */
  ["changeCarInputMode"]?: () => boolean;
}

interface _Keyboard extends BaseComponent<KeyboardProps & KeyboardEvents> {}

interface KeyboardInstance {
  /**
   * 弹出键盘组件
   */
  open: () => any;
  /**
   * 关闭键盘组件
   */
  close: () => any;
  /**
   * mode = "car"下， 调用此方法可以切换中英文模式
   */
  changeCarMode: () => any;
}

export type {
  KeyboardProps as UvKeyboardProps,
  KeyboardEvents as UvKeyboardEvents,
  _Keyboard as UvKeyboard,
  KeyboardInstance as UvKeyboardInstance,
};

declare global {
  namespace UniHelper {
    export type UvKeyboardProps = KeyboardProps;
    export type UvKeyboardEvents = KeyboardEvents;
    export type UvKeyboard = _Keyboard;
    export type UvKeyboardInstance = KeyboardInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvKeyboard: _Keyboard;
  }
}
