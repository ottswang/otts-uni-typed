import type { BaseComponent } from "./_common";

interface RateProps {
  /**
   * 双向绑定选择星星的数量
   * @default 1
   */
  value?: string | number;
  /**
   * 最多可选的星星数量
   * @default 5
   */
  count?: string | number;
  /**
   * 是否禁止用户操作
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否只读
   * @default false
   */
  readonly?: boolean;
  /**
   * 星星的大小，单位rpx
   * @default 18
   */
  size?: string | number;
  /**
   * 未选中星星的颜色
   * @default "#b2b2b2"
   */
  inactiveColor?: string;
  /**
   * 选中的星星颜色
   * @default "#FA3534"
   */
  activeColor?: string;
  /**
   * 星星之间的距离
   * @default 4
   */
  gutter?: string | number;
  /**
   * 最少选中星星的个数
   * @default 1
   */
  minCount?: string | number;
  /**
   * 是否允许半星选择
   * @default false
   */
  allowHalf?: boolean;
  /**
   * 选中时的图标名，只能为uv-ui的内置图标
   * @default "star-fill"
   */
  activeIcon?: string;
  /**
   * 未选中时的图标名，只能为uv-ui的内置图标
   * @default "star"
   */
  inactiveIcon?: string;
  /**
   * 是否可以通过滑动手势选择评分
   * @default true
   */
  touchable?: boolean;
}

interface RateEvents {
  /**
   * 选中的星星发生变化时触发
   * @param {string|number} value 当前选中的星星的数量，如果使用v-model双向绑定方式，无需监听此事件
   */
  ["onChange"]?: (value: string | number) => any;
}

interface _Rate extends BaseComponent<RateProps & RateEvents> {}

export type {
  RateProps as UvRateProps,
  RateEvents as UvRateEvents,
  _Rate as UvRate,
};

declare global {
  namespace UniHelper {
    export type UvRateProps = RateProps;
    export type UvRateEvents = RateEvents;
    export type UvRate = _Rate;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvRate: _Rate;
  }
}
