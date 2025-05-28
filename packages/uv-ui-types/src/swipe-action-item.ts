import type { BaseComponent } from "./_common";

interface SwipeActionItemOption {
  /**
   * 按钮文字
   */
  text?: string;
  /**
   * 样式
   */
  style?: Record<string, any>;
}

interface SwipeActionItemProps {
  /**
   * 控制打开或者关闭
   * @default false
   */
  show?: boolean;
  /**
   * 标识符，如果是v-for，可用index索引
   * @default ""
   */
  index?: string | number;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: false;
  /**
   * 是否自动关闭其他swipe按钮组
   * @default true
   */
  autoClose?: boolean;
  /**
   * 滑动距离阈值，只有大于此值，才被认为是要打开菜单
   * @default 20
   */
  threshold?: number;
  /**
   * 右侧按钮内容
   * @default []
   */
  options?: SwipeActionItemOption[];
  /**
   * 动画过渡时间，单位ms
   * @default 300
   */
  duration?: string | number;
  /**
   * 标识符，如果是v-for，可用index索引值
   * @default ""
   */
  name?: string | number;
}

interface SwipeActionItemEvents {
  /**
   * 按钮被点击时触发
   * @param {string|number} name props参数name的值
   * @param {number} index 第几个按钮被点击
   */
  ["onClick"]?: (name: string | number, index: number) => any;
}

interface _SwipeActionItem
  extends BaseComponent<SwipeActionItemProps & SwipeActionItemEvents> {}

export type {
  SwipeActionItemProps as UvSwipeActionItemProps,
  SwipeActionItemEvents as UvSwipeActionItemEvents,
  _SwipeActionItem as UvSwipeActionItem,
};

declare global {
  namespace UniHelper {
    export type UvSwipeActionItemProps = SwipeActionItemProps;
    export type UvSwipeActionItemEvents = SwipeActionItemEvents;
    export type UvSwipeActionItem = _SwipeActionItem;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvSwipeActionItem: _SwipeActionItem;
  }
}
