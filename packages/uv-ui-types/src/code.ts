import type { BaseComponent } from "./_common";

interface CodeProps {
  /**
   * 倒计时所需的秒数
   * @default 60
   */
  seconds?: string | number;
  /**
   * 开始前的提示语
   * @default "获取验证码"
   */
  startText?: string;
  /**
   * 倒计时期间的提示语，必须带有字母"x"
   * @default "X秒重新获取"
   */
  changeText?: string;
  /**
   * 倒计结束的提示语
   * @default "重新获取"
   */
  endText?: string;
  /**
   * 是否在H5刷新或各端返回再进入时继续倒计时
   * @default false
   */
  keepRunning?: boolean;
  /**
   * 多个组件之间继续倒计时的区分key，见上方说明
   * @default ""
   */
  uniqueKey?: string;
}

interface CodeEvents {
  /**
   * 倒计时期间，每秒触发一次
   * @param {string} text 当前剩余多少秒的状态
   */
  ["onChange"]?: (text: string) => any;
  /**
   * 开始倒计时触发
   */
  ["onStart"]?: () => any;
  /**
   * 结束倒计时触发
   */
  ["onEnd"]?: () => any;
}

interface _Code extends BaseComponent<CodeProps & CodeEvents> {}

interface CodeInstance {
  /**
   * 开始倒计时
   */
  start: () => any;
  /**
   * 结束当前正在进行中的倒计时，设置组件为可以重新获取验证码的状态
   */
  reset: () => any;
  /**
   * 获取当前倒计时状态
   */
  canGetCode: boolean;
}

export type {
  CodeProps as UvCodeProps,
  CodeEvents as UvCodeEvents,
  _Code as UvCode,
  CodeInstance as UvCodeInstance,
};

declare global {
  namespace UniHelper {
    export type UvCodeProps = CodeProps;
    export type UvCodeEvents = CodeEvents;
    export type UvCode = _Code;
    export type UvCodeInstance = CodeInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvCode: _Code;
  }
}
