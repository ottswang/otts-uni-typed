import type { BaseComponent } from "./_common";

interface DropDownItemProps {
  /**
   * 字段标识
   * @default ""
   */
  name?: string | number;
  /**
   * 类型 1 没有筛选项，直接进行选中和不选中 2 有多个选项
   * @default ""
   */
  type?: string | number;
  /**
   * 筛选的文本
   * @default ""
   */
  label?: string;
  /**
   * 筛选的值
   * @default ""
   */
  value?: string | number;
  /**
   * 该项是否打开，可用于重置选项状态
   * @default false
   */
  isDrop?: boolean;
}

interface _DropdownItem extends BaseComponent<DropDownItemProps> {}

export type {
  DropDownItemProps as UvDropdownItemProps,
  _DropdownItem as UvDropdownItem,
};

declare global {
  namespace UniHelper {
    export type UvDropdownItemProps = DropDownItemProps;
    export type UvDropdownItem = _DropdownItem;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvDropdownItem: _DropdownItem;
  }
}
