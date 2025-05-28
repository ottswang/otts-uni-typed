import type { BaseComponent } from "./_common";

interface SwipeActionProps {
  /**
   * 是否自动关闭其他swipe按钮组
   * @default true
   */
  autoClose?: boolean;
}

interface SwipeActionEvents {
  /**
   * 点击组件时触发
   * @param {number} index 第几个被点击
   */
  ["onClick"]?: (index: number) => any;
}

interface _SwipeAction
  extends BaseComponent<SwipeActionProps & SwipeActionEvents> {}

export type {
  SwipeActionProps as UvSwipeActionProps,
  SwipeActionEvents as UvSwipeActionEvents,
  _SwipeAction as UvSwipeAction,
};

declare global {
  namespace UniHelper {
    export type UvSwipeActionProps = SwipeActionProps;
    export type UvSwipeActionEvents = SwipeActionEvents;
    export type UvSwipeAction = _SwipeAction;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvSwipeAction: _SwipeAction;
  }
}
