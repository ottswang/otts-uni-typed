import type { BaseComponent } from "./_common";

interface LineProgressProps {
  /**
   * 进度条激活部分的颜色
   * @default "#19be6b"
   */
  activeColor?: string;
  /**
   * 进度条的底色，默认为灰色
   * @default "#ececec"
   */
  inactiveColor?: string;
  /**
   * 进度百分比，数值
   * @default 0
   */
  percentage?: string | number;
  /**
   * 是否在进度条内部显示百分比的值
   * @default true
   */
  showText?: boolean;
  /**
   * 进度条的高度，默认单位px。eg：height="30rpx"
   * @default 12
   */
  height?: string | number;
  /**
   * 自定义外部样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface LineProgressSlots {
  /**
   * 传入自定义的显示内容，将会覆盖默认显示的百分比值
   */
  ["default"]?: () => any;
}

interface _LineProgress
  extends BaseComponent<LineProgressProps, LineProgressSlots> {}

export type {
  LineProgressProps as UvLineProgressProps,
  _LineProgress as UvLineProgress,
};

declare global {
  namespace UniHelper {
    export type UvLineProgressProps = LineProgressProps;
    export type UvLineProgress = _LineProgress;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvLineProgress: _LineProgress;
  }
}
