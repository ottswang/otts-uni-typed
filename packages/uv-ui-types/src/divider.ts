import type { BaseComponent } from "./_common";

type DividerTextPosition = "center" | "left" | "right";

interface DividerProps {
  /**
   * 是否虚线
   * @default false
   */
  dashed?: boolean;
  /**
   * 是否细线
   * @default true
   */
  hairline?: boolean;
  /**
   * 是否以点替代文字，优先于text字段起作用
   * @default false
   */
  dot?: boolean;
  /**
   * 内容文本的位置
   * @default "center"
   */
  textPosition?: DividerTextPosition;
  /**
   * 文本内容
   * @default ""
   */
  text?: string | number;
  /**
   * 文本大小
   * @default 14
   */
  textSize?: string | number;
  /**
   * 文本颜色
   * @default "#909399"
   */
  textColor?: string;
  /**
   * 线条颜色
   * @default "#dcdfe6"
   */
  lineColor?: string;
}

interface DividerEvents {
  /**
   * divider组件被点击时触发
   */
  ["onClick"]?: () => any;
}

interface _Divider extends BaseComponent<DividerProps & DividerEvents> {}

export type {
  DividerProps as UvDividerProps,
  DividerEvents as UvDividerEvents,
  _Divider as UvDivider,
};

declare global {
  namespace UniHelper {
    export type UvDividerProps = DividerProps;
    export type UvDividerEvents = DividerEvents;
    export type UvDivider = _Divider;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvDivider: _Divider;
  }
}
