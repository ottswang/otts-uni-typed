import type { BaseComponent, ImageMode } from "./_common";

type IconLabelPos = "right" | "bottom" | "top" | "left";

interface IconProps {
  /**
   * 图标名称，若带有/或遵循base64图片格式，会被认为是图片图标
   * @default ""
   */
  name?: string;
  /**
   * 图标颜色，接受主题色eg: color="primary"
   * @default "#606266"
   */
  color?: string;
  /**
   * 图标字体大小，单位px(rpx)
   * @default "16px"
   */
  size?: string | number;
  /**
   * 是否显示粗体
   * @default false
   */
  bold?: boolean;
  /**
   * 一个用于区分多个图标的值，点击图标时通过click事件传出
   * @default ""
   */
  index?: string | number;
  /**
   * 图标按下去的样式类，用法同uni的view组件的hover-class参数
   * @default ""
   */
  hoverClass?: string;
  /**
   * 自定义字体图标库时，需要写上此值
   * @default "uvicon"
   */
  customPrefix?: string;
  /**
   * 图标右侧 / 下方的label文字
   * @default ""
   */
  label?: string | number;
  /**
   * label相对于图标的位置
   * @default "right"
   */
  labelPos?: IconLabelPos;
  /**
   * label字体大小，单位px
   * @default "15px"
   */
  labelSize?: string | number;
  /**
   * label字体颜色
   * @default "#606266"
   */
  labelColor?: string;
  /**
   * label与图标的距离，单位px(rpx)
   * @default "3px"
   */
  space?: string | number;
  /**
   * 图片裁剪、缩放的模式，image组件原生属性
   * @default ""
   */
  imgMode?: ImageMode;
  /**
   * name为图片路径时图片的宽度，单位px(rpx)
   * @default ""
   */
  width?: string | number;
  /**
   * name为图片路径时图片的高度，单位px(rpx)
   * @default ""
   */
  height?: string | number;
  /**
   * 图标到顶部的距离，如果某些场景，如果图标没有垂直居中，可以调整此参数，单位px(rpx)
   * @default 0
   */
  top?: string | number;
  /**
   * 是否阻止事件传播
   * @default false
   */
  stop?: boolean;
}

interface IconEvents {
  /**
   * 点击图标时触发
   * @param {number} index 通过props传递的index值
   */
  ["onClick"]?: (index: number) => any;
}

interface _Icon extends BaseComponent<IconProps & IconEvents> {}

export type {
  IconProps as UvIconProps,
  IconEvents as UvIconEvents,
  _Icon as UvIcon,
};

declare global {
  namespace UniHelper {
    export type UvIconProps = IconProps;
    export type UvIconEvents = IconEvents;
    export type UvIcon = _Icon;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvIcon: _Icon;
  }
}
