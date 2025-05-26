export interface AllowedComponentProps {
  /**
   * 小程序下不支持，请用 `view` 包裹
   */
  class?: unknown;
  /**
   * 小程序下请用 `customStyle` 配置自定义样式
   */
  style?: unknown;
}

export interface VNodeProps {
  key?: string | number | symbol;
  ref?: unknown;
}

export interface BaseComponent<T, K = any> {
  new (): {
    $props: AllowedComponentProps & VNodeProps & T;
    $slots: K;
  };
}

export type Lang = "zh_CN" | "zh_TW" | "en";

export type ColorType = "warning" | "success" | "primary" | "error" | "info";

export type Effect = "light" | "dark";

export type LoadingMode = "spinner" | "circle" | "semicircle";

export type Shape = "circle" | "square";

export type ImageMode =
  | "scaleToFill"
  | "aspectFit"
  | "aspectFill"
  | "widthFix"
  | "heightFix"
  | "top"
  | "bottom"
  | "center"
  | "left"
  | "right"
  | "top left"
  | "top right"
  | "bottom left"
  | "bottom right";

export type LinkType = "navigateTo" | "redirectTo" | "reLaunch" | "switchTab";

export type Direction = "row" | "column";

export type LabelPosition = "top" | "left";

export type IconPlacement = "left" | "right";
