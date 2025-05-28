import type { BaseComponent } from "./_common";

interface SwitchProps {
  /**
   * 双向绑定的值
   * @description 只能使用v-model传值，避免异步操作不生效的BUG
   * @version `1.1.8`
   * @default false
   */
  value?: boolean | string | number;
  /**
   * 是否处于加载中
   * @default false
   */
  loading?: boolean;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 开关尺寸，单位rpx
   * @default 25
   */
  size?: string | number;
  /**
   * 打开时的背景色
   * @default "#2979ff"
   */
  activeColor?: string;
  /**
   * 关闭时的背景色
   * @default "#ffffff"
   */
  inactiveColor?: string;
  /**
   * switch打开时的值
   * @default true
   */
  activeValue?: boolean | string | number;
  /**
   * switch关闭时的值
   * @default false
   */
  inactiveValue?: boolean | string | number;
  /**
   * 是否开启异步变更，开启后需要手动控制输入值
   * @default false
   */
  asyncChange?: boolean;
  /**
   * 圆点与外边框的距离
   * @default 0
   */
  space?: string | number;
}

interface SwitchEvents {
  /**
   * 在switch打开或关闭时触发
   * @param {boolean|string|number} value 打开时为activeValue值，关闭时为inactiveValue值
   */
  ["onChange"]?: (value: boolean | string | number) => any;
  /**
   * 在switch打开或关闭时触发（没开启异步）
   * @param {boolean|string|number} value 打开时为activeValue值，关闭时为inactiveValue值
   */
  ["onInput"]?: (value: boolean | string | number) => any;
}

interface _Switch extends BaseComponent<SwitchProps & SwitchEvents> {}

export type {
  SwitchProps as UvSwitchProps,
  SwitchEvents as UvSwitchEvents,
  _Switch as UvSwitch,
};

declare global {
  namespace UniHelper {
    export type UvSwitchProps = SwitchProps;
    export type UvSwitchEvents = SwitchEvents;
    export type UvSwitch = _Switch;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvSwitch: _Switch;
  }
}
