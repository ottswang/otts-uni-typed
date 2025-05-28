import type { BaseComponent, Shape } from "./_common";

interface CheckboxProps {
  /**
   * checkbox的名称
   * @default ""
   */
  name?: string | number | boolean;
  /**
   * 形状
   * @default "square"
   */
  shape?: Shape;
  /**
   * 整体的大小
   * @default ""
   */
  size?: string | number;
  /**
   * 是否默认选中
   * @default false
   */
  checked?: boolean;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
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
   * 图标的大小，单位px
   * @default ""
   */
  iconSize?: string | number;
  /**
   * 图标颜色
   * @default ""
   */
  iconColor?: string;
  /**
   * label提示文字
   * @default ""
   */
  label?: string;
  /**
   * label的字体大小，px单位
   * @default ""
   */
  labelSize?: string | number;
  /**
   * label的颜色
   * @default ""
   */
  labelColor?: string;
  /**
   * 是否禁止点击提示语选中复选框
   * @default false
   */
  labelDisabled?: boolean;
}

interface CheckboxEvents {
  /**
   * 某个checkbox状态发生变化时触发(选中状态)
   * @param {string|number|boolean} name 通过props传递的name参数
   */
  ["onChange"]?: (name: string | number | boolean) => any;
}

interface CheckboxSlots {
  /**
   * 自定义label内容，自定义后，labelDisabled设置将会失效
   */
  ["default"]?: () => any;
  /**
   * 自定义选中图标
   */
  ["icon"]?: () => any;
}

interface _Checkbox
  extends BaseComponent<CheckboxProps & CheckboxEvents, CheckboxSlots> {}

export type {
  CheckboxProps as UvCheckboxProps,
  CheckboxEvents as UvCheckboxEvents,
  _Checkbox as UvCheckbox,
};

declare global {
  namespace UniHelper {
    export type UvCheckboxProps = CheckboxProps;
    export type UvCheckboxEvents = CheckboxEvents;
    export type UvCheckbox = _Checkbox;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvCheckbox: _Checkbox;
  }
}
