import type { BaseComponent, Shape } from "./_common";

interface RadioProps {
  /**
   * radio的名称
   * @default ""
   */
  name?: string | number | boolean;
  /**
   * 形状
   * @default "circle"
   */
  shape?: Shape;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否禁止点击提示语选中复选框
   * @default false
   */
  labelDisabled?: boolean;
  /**
   * 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
   * @default ""
   */
  activeColor?: string;
  /**
   * 未选中的颜色
   * @default ""
   */
  inactiveColor?: string;
  /**
   * 图标的大小，单位px(rpx)
   * @default ""
   */
  iconSize?: string | number;
  /**
   * label的字体大小，单位px(rpx)
   * @default ""
   */
  labelSize?: string | number;
  /**
   * label提示文字
   * @default ""
   */
  label?: string | number;
  /**
   * 整体的大小
   * @default ""
   */
  size?: string | number;
  /**
   * 图标颜色
   * @default ""
   */
  iconColor?: string;
  /**
   * label的颜色
   * @default ""
   */
  labelColor?: string;
}

interface RadioEvents {
  /**
   * 某个radio状态发生变化时触发(选中状态)
   * @param {string|number|boolean} name props传递的name参数
   */
  ["onChange"]?: (name: string | number | boolean) => any;
}

interface RadioSlots {
  /**
   * 自定义label内容，自定义后，labelDisabled设置将会失效
   */
  ["default"]?: () => any;
  /**
   * 自定义选中图标
   */
  ["icon"]?: () => any;
}

interface _Radio extends BaseComponent<RadioProps & RadioEvents, RadioSlots> {}

export type {
  RadioProps as UvRadioProps,
  RadioEvents as UvRadioEvents,
  _Radio as UvRadio,
};

declare global {
  namespace UniHelper {
    export type UvRadioProps = RadioProps;
    export type UvRadioEvents = RadioEvents;
    export type UvRadio = _Radio;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvRadio: _Radio;
  }
}
