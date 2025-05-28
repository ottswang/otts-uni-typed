import type { BaseComponent } from "./_common";

type GridAlign = "left" | "center" | "right";

interface GridProps {
  /**
   * 宫格的列数
   * @default 3
   */
  col?: string | number;
  /**
   * 是否显示宫格的边框
   * @default true
   */
  border?: boolean;
  /**
   * 宫格的对齐方式，用于控制只有一两个宫格时的对齐场景
   * @default "left"
   */
  align?: GridAlign;
  /**
   * 自定义外部样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface GridEvents {
  /**
   * 点击宫格触发
   * @param {string|number} name 宫格的name
   */
  ["onClick"]?: (name: string | number) => any;
}

interface _Grid extends BaseComponent<GridProps & GridEvents> {}

export type {
  GridProps as UvGridProps,
  GridEvents as UvGridEvents,
  _Grid as UvGrid,
};

declare global {
  namespace UniHelper {
    export type UvGridProps = GridProps;
    export type UvGridEvents = GridEvents;
    export type UvGrid = _Grid;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvGrid: _Grid;
  }
}
