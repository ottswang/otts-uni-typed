import type { BaseComponent, Direction, IconPlacement, Shape } from "./_common";

interface RadioGroupProps {
  /**
   * 选中name的值
   * @default ""
   */
  value?: string | number | boolean;
  /**
   * 是否禁用全部checkbox
   * @default false
   */
  disabled?: boolean;
  /**
   * 形状
   * @default "circle"
   */
  shape?: Shape;
  /**
   * 选中状态下的颜色，如子Checkbox组件设置此值，将会覆盖本值
   * @default "#2979ff"
   */
  activeColor?: string;
  /**
   * 未选中的颜色
   * @default "#c8c9cc"
   */
  inactiveColor?: string;
  /**
   * 标识符
   */
  name?: string;
  /**
   * 整个组件的尺寸，默认px。**注意：该参数和iconSize应该同步设置，才能改变选框大小**
   * @default 18
   */
  size?: string | number;
  /**
   * 布局方式
   * @default "row"
   */
  placement?: Direction;
  /**
   * 文本
   * @default ""
   */
  label?: string;
  /**
   * label的字体颜色
   * @default "#303133"
   */
  labelColor?: string;
  /**
   * label的字体大小，单位px(rpx)
   * @default 14
   */
  labelSize?: string | number;
  /**
   * 是否禁止点击文本操作
   * @default false
   */
  labelDisabled?: boolean;
  /**
   * 图标颜色
   * @default "#ffffff"
   */
  iconColor?: string;
  /**
   * 图标的大小，单位px(rpx)
   * @default 12
   */
  iconSize?: string | number;
  /**
   * 竖向配列时，是否显示下划线
   * @default false
   */
  borderBottom?: boolean;
  /**
   * 勾选图标的对齐方式
   * @default "left"
   */
  iconPlacement?: IconPlacement;
  /**
   * 自定义样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface RadioGroupEvents {
  /**
   * 任一个radio状态发生变化时触发
   * @param {string|number|boolean} name props传递的name值
   */
  ["onChange"]?: (name: string | number | boolean) => any;
}

interface _RadioGroup
  extends BaseComponent<RadioGroupProps & RadioGroupEvents> {}

export type {
  RadioGroupProps as UvRadioGroupProps,
  RadioGroupEvents as UvRadioGroupEvents,
  _RadioGroup as UvRadioGroup,
};

declare global {
  namespace UniHelper {
    export type UvRadioGroupProps = RadioGroupProps;
    export type UvRadioGroupEvents = RadioGroupEvents;
    export type UvRadioGroup = _RadioGroup;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvRadioGroup: _RadioGroup;
  }
}
