import type { BaseComponent } from "./_common";

interface CellGroupProps {
  /**
   * 分组标题
   * @default ""
   */
  title?: string;
  /**
   * 是否显示分组标题的下边框
   * @default true
   */
  border?: boolean;
  /**
   * 用户自定义外部样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface _CellGroup extends BaseComponent<CellGroupProps> {}

export type { CellGroupProps as UvCellGroupProps, _CellGroup as UvCellGroup };

declare global {
  namespace UniHelper {
    export type UvCellGroupProps = CellGroupProps;
    export type UvCellGroup = _CellGroup;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvCellGroup: _CellGroup;
  }
}
