import type { BaseComponent } from "./_common";

type LineDirection = "row" | "col";

interface LineProps {
  /**
   * 线条的颜色
   * @default "#d6d7d9"
   */
  color?: string;
  /**
   * 长度，竖向时表现为高度，横向时表现为长度。direction="col"时必须设置length值。
   * @default "100%"
   */
  length?: string | number;
  /**
   * 线条的方向
   * @default "row"
   */
  direction?: LineDirection;
  /**
   * 是否显示细边框
   * @default true
   */
  hairline?: boolean;
  /**
   * 线条与上下左右元素的间距，字符串形式，如"30rpx"、"20rpx 30rpx"，默认单位px
   * @default 0
   */
  margin?: string | number;
  /**
   * 是否虚线
   * @default false
   */
  dashed?: boolean;
  /**
   * 自定义样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface _Line extends BaseComponent<LineProps> {}

export type { LineProps as UvLineProps, _Line as UvLine };

declare global {
  namespace UniHelper {
    export type UvLineProps = LineProps;
    export type UvLine = _Line;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvLine: _Line;
  }
}
