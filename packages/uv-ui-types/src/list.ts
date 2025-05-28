import type { BaseComponent, Direction } from "./_common";

interface ListProps {
  /**
   * 是否显示边框
   * @default false
   */
  border?: boolean;
  /**
   * 边框颜色
   * @default "#dadbde"
   */
  borderColor?: string;
  /**
   * 控制子组件排版方向，使用默认插槽自定义内容时不生效
   * @default "row"
   */
  direction?: Direction;
  /**
   * 控制子组件内边距，使用默认插槽自定义内容时不生效
   * @default "20rpx 30rpx"
   */
  padding?: string;
  /**
   * 自定义外部样式
   */
  customStyle?: string | Record<string, any>;
}

interface _List extends BaseComponent<ListProps> {}

export type { ListProps as UvListProps, _List as UvList };

declare global {
  namespace UniHelper {
    export type UvListProps = ListProps;
    export type UvList = _List;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvList: _List;
  }
}
