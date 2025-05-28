import type { BaseComponent } from "./_common";

interface CountToProps {
  /**
   * 开始值
   * @default 0
   */
  startVal?: string | number;
  /**
   * 结束值
   * @default 0
   */
  endVal?: string | number;
  /**
   * 滚动过程所需的时间，单位ms
   * @default 2000
   */
  duration?: string | number;
  /**
   * 是否自动开始滚动
   * @default true
   */
  autoplay?: boolean;
  /**
   * 要显示的小数位数
   * @default 0
   */
  decimals?: string | number;
  /**
   * 小数位分割符号
   * @default "."
   */
  decimal?: string;
  /**
   * 滚动结束时，是否缓动结尾
   * @default true
   */
  useEasing?: boolean;
  /**
   * 字体颜色
   * @default "#606266"
   */
  color?: string;
  /**
   * 字体大小，单位默认px
   * @default 22
   */
  fontSize?: string | number;
  /**
   * 字体是否加粗
   * @default false
   */
  bold?: boolean;
  /**
   * 千位分隔符
   * @default ""
   */
  separator?: string;
  /**
   * 自定义外部样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface CountToEvents {
  /**
   * 数值滚动到目标值时触发
   */
  ["onEnd"]?: () => any;
}

interface _CountTo extends BaseComponent<CountToProps & CountToEvents> {}

interface CountToInstance {
  /**
   * autoplay为false时，通过此方法启动滚动，调用即从头开始滚动
   */
  start: () => any;
  /**
   * 暂定状态，从暂停状态开始滚动；或者滚动状态下，暂停
   */
  restart: () => any;
  /**
   * 暂停滚动
   */
  stop: () => any;
}

export type {
  CountToProps as UvCountToProps,
  CountToEvents as UvCountToEvents,
  _CountTo as UvCountTo,
  CountToInstance as UvCountToInstance,
};

declare global {
  namespace UniHelper {
    export type UvCountToProps = CountToProps;
    export type UvCountToEvents = CountToEvents;
    export type UvCountTo = _CountTo;
    export type UvCountToInstance = CountToInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvCountTo: _CountTo;
  }
}
