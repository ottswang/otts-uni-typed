import type { BaseComponent } from "./_common";

interface CollapseProps {
  /**
   * 当前展开面板uv-collapse-item属性name，非手风琴模式必须为数组，eg：['2']。手风琴模式为字符串或数字。
   * @default ""
   */
  value?: string | number | string[];
  /**
   * 是否手风琴模式
   * @default false
   */
  accordion?: boolean;
  /**
   * 是否显示外边框
   * @default true
   */
  border?: boolean;
}

interface CollapseEvents {
  /**
   * 当前激活面板展开/关闭时触发
   * @param {string|string[]} activeNames 如果是手风琴模式，类型为String，否则为Array
   */
  ["onChange"]?: (activeNames: string | string[]) => any;
  /**
   * 当前激活面板展开时触发
   * @param {string|string[]} activeNames 如果是手风琴模式，类型为String，否则为Array
   */
  ["onOpen"]?: (activeNames: string | string[]) => any;
  /**
   * 当前激活面板关闭时触发
   * @param {string|string[]} activeNames 如果是手风琴模式，类型为String，否则为Array
   */
  ["onClose"]?: (activeNames: string | string[]) => any;
}

interface _Collapse extends BaseComponent<CollapseProps & CollapseEvents> {}

interface CollapseInstance {
  /**
   * 重新初始化内部高度计算，用于异步获取内容的情形，请结合this.$nextTick()使用
   */
  init: () => any;
}

export type {
  CollapseProps as UvCollapseProps,
  CollapseEvents as UvCollapseEvents,
  _Collapse as UvCollapse,
  CollapseInstance as UvCollapseInstance,
};

declare global {
  namespace UniHelper {
    export type UvCollapseProps = CollapseProps;
    export type UvCollapseEvents = CollapseEvents;
    export type UvCollapse = _Collapse;
    export type UvCollapseInstance = CollapseInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvCollapse: _Collapse;
  }
}
