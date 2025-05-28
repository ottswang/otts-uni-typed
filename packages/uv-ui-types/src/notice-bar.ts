import type { BaseComponent, Direction, LinkType } from "./_common";

type NoticeBarMode = "link" | "closable";

interface NoticeBarProps {
  /**
   * 显示的内容，direction为column时要求为数组， 为row时要求为字符串
   * @default ""
   */
  text?: string | string[];
  /**
   * 通告滚动模式
   */
  direction?: Direction;
  /**
   * direction = "row"时，是否使用步进形式滚动
   * @default false
   */
  step?: boolean;
  /**
   * 左侧的音量图标，不显示:icon="false"或传空
   * @default "volume"
   */
  icon?: string;
  /**
   * 通告模式，link-显示右箭头，closable-显示右侧关闭图标
   * @default ""
   */
  mode?: NoticeBarMode;
  /**
   * 文字颜色
   * @default "#f9ae3d"
   */
  color?: string;
  /**
   * 背景颜色
   * @default "#fdf6ec"
   */
  bgColor?: string;
  /**
   * 水平滚动时的滚动速度，即每秒滚动多少px(rpx)，这有利于控制文字无论多少时，都能有一个恒定的速度
   * @default 80
   */
  speed?: string | number;
  /**
   * 字体大小
   * @default 14
   */
  fontSize?: string | number;
  /**
   * 滚动一个周期的时间长，单位ms
   * @default 2000
   */
  duration?: string | number;
  /**
   * 跳转的页面路径
   * @default ""
   */
  url?: string;
  /**
   * 页面跳转的类型
   * @default "navigateTo"
   */
  linkType?: LinkType;
  /**
   * 是否禁止用手滑动切换，仅direction="column"生效
   * @default true
   */
  disableTouch?: boolean;
  /**
   * 是否禁止自动滚动，仅direction="column"生效
   * @version `1.0.4`
   * @default false
   */
  disableScroll?: boolean;
  /**
   * 定义需要用到的外部样式
   */
  customStyle?: string | Record<string, any>;
}

interface NoticeBarEvents {
  /**
   * 点击通告文字触发
   * @param {number} index 点击的text的索引
   */
  ["onClick"]?: (index: number) => any;
  /**
   * 点击右侧关闭图标触发
   */
  ["onClose"]?: () => any;
  /**
   * direction 为 column 滚动时触发
   * @param {number} index 索引
   */
  ["onChange"]?: (index: number) => any;
}

interface _NoticeBar extends BaseComponent<NoticeBarProps & NoticeBarEvents> {}

export type {
  NoticeBarProps as UvNoticeBarProps,
  NoticeBarEvents as UvNoticeBarEvents,
  _NoticeBar as UvNoticeBar,
};

declare global {
  namespace UniHelper {
    export type UvNoticeBarProps = NoticeBarProps;
    export type UvNoticeBarEvents = NoticeBarEvents;
    export type UvNoticeBar = _NoticeBar;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvNoticeBar: _NoticeBar;
  }
}
