import type { BaseComponent } from "./_common";

interface GridItemProps {
  /**
   * 宫格的name
   * @default ""
   */
  name?: string | number;
  /**
   * 宫格的背景颜色
   * @default "transparent"
   */
  bgColor?: string;
}

interface GridItemEvents {
  /**
   * 点击宫格触发
   * @param {string|number} name 宫格的name
   */
  ["onClick"]?: (name: string | number) => any;
}

interface _GridItem extends BaseComponent<GridItemProps & GridItemEvents> {}

export type {
  GridItemProps as UvGridItemProps,
  GridItemEvents as UvGridItemEvents,
  _GridItem as UvGridItem,
};

declare global {
  namespace UniHelper {
    export type UvGridItemProps = GridItemProps;
    export type UvGridItemEvents = GridItemEvents;
    export type UvGridItem = _GridItem;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvGridItem: _GridItem;
  }
}
