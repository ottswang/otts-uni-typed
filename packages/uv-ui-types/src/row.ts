import type { BaseComponent } from "./_common";

type RowJustify =
  | "start"
  | "flex-start"
  | "end"
  | "flex-end"
  | "center"
  | "around"
  | "space-around"
  | "between"
  | "space-between";
type RowAlign = "top" | "center" | "bottom";

interface RowProps {
  /**
   * 栅格间隔，左右各为此值的一半，单位任意
   * @default 0
   */
  gutter?: string | number;
  /**
   * 水平排列方式(微信小程序暂不支持)
   * @default "start"
   */
  justify?: RowJustify;
  /**
   * 垂直对齐方式
   * @default "center"
   */
  align?: RowAlign;
}

interface RowEvents {
  /**
   * 点击触发事件
   */
  ["onClick"]?: () => any;
}

interface _Row extends BaseComponent<RowProps & RowEvents> {}

export type {
  RowJustify as UvRowJustify,
  RowProps as UvRowProps,
  RowEvents as UvRowEvents,
  _Row as UvRow,
};

declare global {
  namespace UniHelper {
    export type UvRowJustify = RowJustify;
    export type UvRowProps = RowProps;
    export type UvRowEvents = RowEvents;
    export type UvRow = _Row;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvRow: _Row;
  }
}
