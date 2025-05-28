import type { BaseComponent, ColorType } from "./_common";

type BadgeShape = "circle" | "horn";
type BadgeNumberType = "overflow" | "ellipsis" | "limit";

interface BadgeProps {
  /**
   * 展示的数字，大于 max 时显示为 ${max}+；为0且show-zero为false时隐藏
   * @default ""
   */
  value?: string | number;
  /**
   * 不展示数字，只有一个小点
   * @default false
   */
  isDot?: boolean;
  /**
   * 组件是否显示
   * @default true
   */
  show?: boolean;
  /**
   * 最大值，超过最大值会显示 '{max}+'
   * @default 99
   */
  max?: string | number;
  /**
   * 主题类型
   * @default "error"
   */
  type?: ColorType;
  /**
   * 当数值为 0 时，是否展示 Badge
   * @default false
   */
  showZero?: boolean;
  /**
   * 背景颜色，优先级比type高。如设置该属性，type参数就会失效
   * @default ""
   */
  bgColor?: string;
  /**
   * 字体颜色
   * @default "#ffffff"
   */
  color?: string;
  /**
   * 徽标形状
   * @default "circle"
   */
  shape?: BadgeShape;
  /**
   * 置数字的显示方式
   * @default "overflow"
   */
  numberType?: BadgeNumberType;
  /**
   * 是否反转背景和字体颜色
   * @default false
   */
  inverted?: boolean;
  /**
   * 组件是否绝对定位，为true时，offset参数才有效
   * @default false
   */
  absolute?: boolean;
  /**
   * 设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，absolute为true时有效
   * @default ""
   */
  offset?: (string | number)[];
  /**
   * 自定义外部样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface _Badge extends BaseComponent<BadgeProps> {}

export type { BadgeProps as UvBadgeProps, _Badge as UvBadge };

declare global {
  namespace UniHelper {
    export type UvBadgeProps = BadgeProps;
    export type UvBadge = _Badge;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvBadge: _Badge;
  }
}
