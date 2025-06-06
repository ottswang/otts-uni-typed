import type { BaseComponent, ImageMode } from "./_common";

type SwiperIndicatorMode = "line" | "dot";
type SwiperEasingFunction =
  | "default"
  | "linear"
  | "easeInCubic"
  | "easeOutCubic"
  | "easeInOutCubic";
interface ListItem {
  /**
   * 标题
   */
  title?: string;
  /**
   * 视频封面
   */
  poster?: string;
  /**
   * 资源类型
   */
  type?: "image" | "video";
  /**
   * 图片地址
   */
  url?: string;
  /**
   * 其他参数
   */
  [x: string]: any;
}

interface SwiperProps {
  /**
   * 轮播图数据
   */
  list?: string[] | ListItem[];
  /**
   * 是否显示面板指示器
   * @default false
   */
  indicator?: boolean;
  /**
   * 指示器激活的颜色
   * @default "#ffffff"
   */
  indicatorActiveColor?: string;
  /**
   * 指示器非激活颜色
   * @default "rgba(255, 255, 255, 0.35)"
   */
  indicatorInactiveColor?: string;
  /**
   * 指示器样式
   * @default ""
   */
  indicatorStyle?: string | { bottom?: string; left?: string; right?: string };
  /**
   * 指示器模式
   * @default "line"
   */
  indicatorMode?: SwiperIndicatorMode;
  /**
   * 是否自动切换
   * @default true
   */
  autoplay?: boolean;
  /**
   * 当前所在滑块的 index
   * @default 0
   */
  current?: string | number;
  /**
   * 当前所在滑块的 item-id ，不能与 current 被同时指定
   * @default ""
   */
  currentItemId?: string;
  /**
   * 滑块自动切换时间间隔（ms）
   * @default 3000
   */
  interval?: string | number;
  /**
   * 滑块切换过程所需时间（ms），nvue不支持
   * @default 300
   */
  duration?: string | number;
  /**
   * 播放到末尾后是否重新回到开头
   * @default false
   */
  circular?: boolean;
  /**
   * 滑动方向是否为纵向
   * @default false
   */
  vertical?: boolean;
  /**
   * 前边距，可用于露出前一项的一小部分，nvue和支付宝不支持
   * @default 0
   */
  previousMargin?: string | number;
  /**
   * 后边距，可用于露出后一项的一小部分，nvue和支付宝不支持
   * @default 0
   */
  nextMargin?: string | number;
  /**
   * 当开启时，会根据滑动速度，连续滑动多屏，支付宝不支持
   * @default false
   */
  acceleration?: boolean;
  /**
   * 同时显示的滑块数量，nvue、支付宝小程序不支持
   * @default 1
   */
  displayMultipleItems?: number;
  /**
   * 指定swiper切换缓动动画类型， 只对微信小程序有效
   * @default "default"
   */
  easingFunction?: SwiperEasingFunction;
  /**
   * list数组中指定对象的目标属性名
   * @default "url"
   */
  keyName?: string;
  /**
   * 图片的裁剪模式
   * @default "aspectFill"
   */
  imgMode?: ImageMode;
  /**
   * 组件高度
   * @default 130
   */
  height?: string | number;
  /**
   * 背景颜色
   * @default "#f3f4f6"
   */
  bgColor?: string;
  /**
   * 组件圆角，数值或带单位的字符串
   * @default 4
   */
  radius?: string | number;
  /**
   * 是否加载中
   * @default false
   */
  loading?: boolean;
  /**
   * 是否显示标题，要求数组对象中有title属性
   * @default false
   */
  showTitle?: boolean;
  /**
   * 显示的标题样式
   * @version `1.0.3`
   * @default ""
   */
  titleStyle?: Record<string, any>;
}

interface SwiperEvents {
  /**
   * 点击轮播图时触发
   * @param {number} index 点击了第几张图片，从0开始
   */
  ["onClick"]?: (index: number) => any;
  /**
   * 轮播图切换时触发(自动或者手动切换)
   * @param {number} index 切换到了第几张图片，从0开始
   */
  ["onChange"]?: (index: number) => any;
}

interface SwiperSlots {
  /**
   * 指示器
   */
  ["indicator"]?: () => any;
}

interface _Swiper
  extends BaseComponent<SwiperProps & SwiperEvents, SwiperSlots> {}

export type {
  SwiperProps as UvSwiperProps,
  SwiperEvents as UvSwiperEvents,
  _Swiper as UvSwiper,
};

declare global {
  namespace UniHelper {
    export type UvSwiperProps = SwiperProps;
    export type UvSwiperEvents = SwiperEvents;
    export type UvSwiper = _Swiper;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvSwiper: _Swiper;
  }
}
