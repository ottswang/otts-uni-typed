import type { BaseComponent, LoadingMode } from "./_common";

type LoadMoreStatus = "loadmore" | "loading" | "nomore";

interface LoadMoreProps {
  /**
   * 组件状态
   * @default "loadmore"
   */
  status?: LoadMoreStatus;
  /**
   * 组件背景颜色，在页面是非白色时会用到
   * @default "transparent"
   */
  bgColor?: string;
  /**
   * 加载中时是否显示图标
   * @default true
   */
  icon?: boolean;
  /**
   * 字体大小，单位rpx或px
   * @default 14
   */
  fontSize?: string | number;
  /**
   * 图标大小，单位rpx或px
   * @default 17
   */
  iconSize?: string | number;
  /**
   * 字体颜色
   * @default "#606266"
   */
  color?: string;
  /**
   * 加载中状态的图标
   * @default "spinner"
   */
  loadingIcon?: LoadingMode;
  /**
   * 加载前的提示语
   * @default "加载更多"
   */
  loadmoreText?: string;
  /**
   * 加载中提示语
   * @default "正在加载..."
   */
  loadingText?: string;
  /**
   * 没有更多的提示语
   * @default "没有更多了"
   */
  nomoreText?: string;
  /**
   * status为nomore时，内容显示为一个"●"
   * @default false
   */
  isDot?: boolean;
  /**
   * 加载中的动画图标的颜色
   * @default "#b7b7b7"
   */
  iconColor?: string;
  /**
   * 线条颜色
   * @default "#E6E8EB"
   */
  lineColor?: string;
  /**
   * 是否虚线
   * @default false
   */
  dashed?: boolean;
  /**
   * 与前一个元素的距离，单位rpx或px
   * @default 10
   */
  marginTop?: string | number;
  /**
   * 与后一个元素的距离，单位rpx或px
   * @default 10
   */
  marginBottom?: string | number;
  /**
   * 高度
   * @default "auto"
   */
  height?: string | number;
  /**
   * 是否显示左边分割线
   * @default false
   */
  line?: boolean;
  /**
   * 自定义外部样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface LoadMoreEvents {
  /**
   * status为loadmore时，点击组件触发
   */
  ["onLoadmore"]?: () => any;
}

interface _LoadMore extends BaseComponent<LoadMoreProps & LoadMoreEvents> {}

export type {
  LoadMoreProps as UvLoadMoreProps,
  LoadMoreEvents as UvLoadMoreEvents,
  _LoadMore as UvLoadMore,
};

declare global {
  namespace UniHelper {
    export type UvLoadMoreProps = LoadMoreProps;
    export type UvLoadMoreEvents = LoadMoreEvents;
    export type UvLoadMore = _LoadMore;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvLoadMore: _LoadMore;
  }
}
