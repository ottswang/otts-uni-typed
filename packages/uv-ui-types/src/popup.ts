import type { BaseComponent } from "./_common";

type PopupMode = "top" | "bottom" | "left" | "right" | "center";
type PopupCloseIconPos =
  | "top-right"
  | "top-left"
  | "bottom-left"
  | "bottom-right";

interface PopupProps {
  /**
   * 弹出方向
   * @default "center"
   */
  mode?: PopupMode;
  /**
   * 动画时长，单位ms
   * @default 300
   */
  duration?: string | number;
  /**
   * 是否显示遮罩
   * @default true
   */
  overlay?: boolean;
  /**
   * 遮罩自定义样式，一般用于修改遮罩颜色，如：{background: 'rgba(3, 100, 219, 0.5)'}
   * @default ""
   */
  overlayStyle?: string | Record<string, any>;
  /**
   * 遮罩透明度，0-1之间，勿与overlayStyle共用
   * @default 0.5
   */
  overlayOpacity?: string | number;
  /**
   * 点击遮罩是否关闭弹窗
   * @default true
   */
  closeOnClickOverlay?: boolean;
  /**
   * 弹出层的z-index值
   * @default 10075
   */
  zIndex?: string | number;
  /**
   * 是否留出顶部安全区（状态栏高度）
   * @default false
   */
  safeAreaInsetTop?: boolean;
  /**
   * 是否为留出底部安全区适配
   * @default true
   */
  safeAreaInsetBottom?: boolean;
  /**
   * 是否显示关闭图标
   * @default false
   */
  closeable?: boolean;
  /**
   * 自定义关闭图标位置
   * @default "top-right"
   */
  closeIconPos?: PopupCloseIconPos;
  /**
   * 当mode=center时 是否开启缩放
   * @default true
   */
  zoom?: boolean;
  /**
   * 背景色，设置为""或none可去除默认的白色背景
   * @default "none"
   */
  bgColor?: string;
  /**
   * 设置圆角值，仅对mode = top | bottom | center有效
   * @default 0
   */
  round?: string | number;
  /**
   * 定义内容区需要用到的外部样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface PopupEvents {
  /**
   * 打开关闭弹窗触发
   */
  ["onChange"]?: (...args: any[]) => any;
  /**
   * 点击遮罩触发
   */
  ["onMaskClick"]?: () => any;
}

interface PopupSlots {
  /**
   * 弹窗内容
   */
  ["default"]?: () => any;
}

interface _Popup extends BaseComponent<PopupProps & PopupEvents, PopupSlots> {}

interface PopupInstance {
  /**
   * 打开弹出层
   */
  open: (type?: PopupMode) => any;
  /**
   * 关闭弹出层
   */
  close: () => any;
}

export type {
  PopupProps as UvPopupProps,
  PopupEvents as UvPopupEvents,
  _Popup as UvPopup,
  PopupInstance as UvPopupInstance,
};

declare global {
  namespace UniHelper {
    export type UvPopupProps = PopupProps;
    export type UvPopupEvents = PopupEvents;
    export type UvPopup = _Popup;
    export type UvPopupInstance = PopupInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvPopup: _Popup;
  }
}
