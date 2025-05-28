import type { BaseComponent } from "./_common";

interface ScrollListProps {
  /**
   * 指示器的整体宽度
   * @default 50
   */
  indicatorWidth?: string | number;
  /**
   * 滑块的宽度
   * @default 20
   */
  indicatorBarWidth?: string | number;
  /**
   * 是否显示面板指示器
   * @default true
   */
  indicator?: boolean;
  /**
   * 指示器非激活颜色
   * @default "#f2f2f2"
   */
  indicatorColor?: string;
  /**
   * 指示器滑块颜色
   * @default "#3c9cff"
   */
  indicatorActiveColor?: string;
  /**
   * 指示器样式
   * @default ""
   */
  indicatorStyle?: string | { bottom?: string; left?: string; right?: string };
}

interface ScrollListEvents {
  /**
   * 滑动到左边时触发
   */
  ["onLeft"]?: () => any;
  /**
   * 滑动到右边时触发
   */
  ["onRight"]?: () => any;
}

interface _ScrollList
  extends BaseComponent<ScrollListProps & ScrollListEvents> {}

export type {
  ScrollListProps as UvScrollListProps,
  ScrollListEvents as UvScrollListEvents,
  _ScrollList as UvScrollList,
};

declare global {
  namespace UniHelper {
    export type UvScrollListProps = ScrollListProps;
    export type UvScrollListEvents = ScrollListEvents;
    export type UvScrollList = _ScrollList;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvScrollList: _ScrollList;
  }
}
