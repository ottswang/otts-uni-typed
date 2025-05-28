import type { BaseComponent } from "./_common";

interface GapProps {
  /**
   * 背景颜色
   * @default "transparent"
   */
  bgColor?: string;
  /**
   * 间隔槽高度，单位px(rpx)
   * @default 20
   */
  height?: string | number;
  /**
   * 与前一个元素的距离，单位px(rpx)
   * @default 0
   */
  marginTop?: string | number;
  /**
   * 与后一个元素的距离，单位px(rpx)
   * @default 0
   */
  marginBottom?: string | number;
}

interface _Gap extends BaseComponent<GapProps> {}

export type { GapProps as UvGapProps, _Gap as UvGap };

declare global {
  namespace UniHelper {
    export type UvGapProps = GapProps;
    export type UvGap = _Gap;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvGap: _Gap;
  }
}
