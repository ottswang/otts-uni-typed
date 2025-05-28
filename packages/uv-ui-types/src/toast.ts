import type { BaseComponent } from "./_common";

type ToastPosition = "top" | "center" | "bottom";
type ToastType = "default" | "error" | "success" | "loading";

interface ToastProps {
  /**
   * 是否加载中
   * @default false
   */
  loading?: boolean;
  /**
   * 展示时的层级
   * @default 10090
   */
  zIndex?: string | number;
  /**
   * 是否显示透明遮罩，防止点击穿透
   * @default true
   */
  overlay?: boolean;
  /**
   * 显示的文本
   * @default ""
   */
  message?: string | number;
  /**
   * 图标，或者绝对路径的图片
   * @default ""
   */
  icon?: string;
  /**
   * toast出现的位置
   */
  position?: ToastPosition;
  /**
   * 主题类型
   * @default ""
   */
  type?: ToastType;
  /**
   * 跳转的参数
   */
  params?: Record<string, any>;
  /**
   * 展示时间，单位ms
   * @default 2000
   */
  duration?: string | number;
  /**
   * 执行完后的回调函数
   * @default null
   */
  complete?: () => any;
}

interface _Toast extends BaseComponent<ToastProps> {}

interface ToastInstance {
  /**
   * 显示toast，如需一进入页面就显示toast，请在onReady生命周期调用
   */
  show: (...args: any[]) => any;
  /**
   * 隐藏toast
   */
  hide: () => any;
}

export type {
  ToastProps as UvToastProps,
  _Toast as UvToast,
  ToastInstance as UvToastInstance,
};

declare global {
  namespace UniHelper {
    export type UvToastProps = ToastProps;
    export type UvToast = _Toast;
    export type UvToastInstance = ToastInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvToast: _Toast;
  }
}
