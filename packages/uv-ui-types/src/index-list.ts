import type { BaseComponent } from "./_common";

interface IndexListProps {
  /**
   * 右边锚点状态非激活时的颜色
   * @default "#606266"
   */
  inactiveColor?: string;
  /**
   * 右边锚点状态激活时的颜色
   * @default "#5677fc"
   */
  activeColor?: string;
  /**
   * 索引字符列表，数组
   * @default "A-Z"
   */
  indexList?: (string | number)[];
  /**
   * 是否开启锚点自动吸顶
   * @default true
   */
  sticky?: boolean;
  /**
   * 自定义导航栏的高度，单位默认px
   * @default 0
   */
  customNavHeight?: string | number;
}

interface IndexListEvents {
  /**
   * 选中右边索引字符时触发
   * @param {string|number} index 索引字符
   */
  ["onSelect"]?: (index: string | number) => any;
}

interface _IndexList extends BaseComponent<IndexListProps & IndexListEvents> {}

export type {
  IndexListProps as UvIndexListProps,
  IndexListEvents as UvIndexListEvents,
  _IndexList as UvIndexList,
};

declare global {
  namespace UniHelper {
    export type UvIndexListProps = IndexListProps;
    export type UvIndexListEvents = IndexListEvents;
    export type UvIndexList = _IndexList;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvIndexList: _IndexList;
  }
}
