import type { BaseComponent } from "./_common";
import type { UvRowJustify } from "./row";

type ColAlign = "top" | "center" | "bottom" | "stretch";
type ColTextAlign = "left" | "center" | "right";

interface ColProps {
  /**
   * 栅格占据的列数，总12等分
   * @default 0
   */
  span?: string | number;
  /**
   * 分栏左边偏移，计算方式与span相同
   * @default 0
   */
  offset?: string | number;
  /**
   * 水平排列方式
   * @default "start"
   */
  justify?: UvRowJustify;
  /**
   * 垂直对齐方式
   * @default "stretch"
   */
  align?: ColAlign;
  /**
   * 文字水平对齐方式
   * @default "left"
   */
  textAlign?: ColTextAlign;
}

interface ColEvents {
  /**
   * col被点击，会阻止事件冒泡到row
   */
  ["onClick"]?: () => any;
}

interface _Col extends BaseComponent<ColProps & ColEvents> {}

export type { ColProps as UvColProps, ColEvents as UvColEvents, _Col as UvCol };

declare global {
  namespace UniHelper {
    export type UvColProps = ColProps;
    export type UvColEvents = ColEvents;
    export type UvCol = _Col;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvCol: _Col;
  }
}
