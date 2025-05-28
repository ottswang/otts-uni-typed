import type { BaseComponent, Direction, Shape } from "./_common";

type CheckboxGroupIconPlacement = "left" | "right";

interface CheckboxGroupProps {
  /**
   * 选中name的值，eg：['a','b']
   * @default []
   */
  value?: string[];
  /**
   * 形状
   * @default "square"
   */
  shape?: Shape;
  /**
   * 是否禁用全部checkbox
   * @default false
   */
  disabled?: boolean;
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
   * label的字体大小，px单位
   * @default 14
   */
  labelSize?: string | number;
  /**
   * label的字体颜色
   * @default "#303133"
   */
  labelColor?: string;
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
   * 图标的大小，单位px
   * @default 12
   */
  iconSize?: string | number;
  /**
   * 勾选图标的对齐方式
   * @default "left"
   */
  iconPlacement?: CheckboxGroupIconPlacement;
  /**
   * 竖向配列时，是否显示下划线
   * @default false
   */
  borderBottom?: boolean;
  /**
   * 自定义样式，某些事件需要用到调整位置等作用
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface CheckGroupEvents {
  /**
   * 任一个checkbox状态发生变化时触发，回调为一个对象
   */
  ["onChange"]?: (...args: any[]) => any;
}

interface _CheckGroup
  extends BaseComponent<CheckboxGroupProps & CheckGroupEvents> {}

export type {
  CheckboxGroupProps as UvCheckboxGroupProps,
  CheckGroupEvents as UvCheckboxGroupEvents,
  _CheckGroup as UvCheckboxGroup,
};

declare global {
  namespace UniHelper {
    export type UvCheckboxGroupProps = CheckboxGroupProps;
    export type UvCheckboxGroupEvents = CheckGroupEvents;
    export type UvCheckboxGroup = _CheckGroup;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvCheckboxGroup: _CheckGroup;
  }
}
