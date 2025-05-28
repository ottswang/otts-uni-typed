import type { BaseComponent } from "./_common";

interface CountDownProps {
  /**
   * 倒计时时长，单位ms
   * @default 0
   */
  time?: string | number;
  /**
   * 时间格式
   * @default "HH:mm:ss"
   */
  format?: string;
  /**
   * 是否自动开始倒计时
   * @default true
   */
  autoStart?: boolean;
  /**
   * 是否展示毫秒倒计时
   * @default false
   */
  millisecond?: boolean;
  /**
   * 自定义外部样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface CountDownEvents {
  /**
   * 过程中，倒计时变化时触发
   * @param {any} time 剩余的时间
   */
  ["onChange"]?: (time: any) => any;
  /**
   * 倒计时结束
   */
  ["onFinish"]?: () => any;
}

interface _CountDown extends BaseComponent<CountDownProps & CountDownEvents> {}

interface CountDownInstance {
  /**
   * 开始倒计时
   */
  start: () => any;
  /**
   * 暂停倒计时
   */
  pause: () => any;
  /**
   * 重置倒计时
   */
  reset: () => any;
}

export type {
  CountDownProps as UvCountDownProps,
  CountDownEvents as UvCountDownEvents,
  CountDownInstance as UvCountDownInstance,
  _CountDown as UvCountDown,
};

declare global {
  namespace UniHelper {
    export type UvCountDownProps = CountDownProps;
    export type UvCountDownEvents = CountDownEvents;
    export type UvCountDownInstance = CountDownInstance;
    export type UvCountDown = _CountDown;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvCountDown: _CountDown;
  }
}
