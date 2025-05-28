import type { BaseComponent } from "./_common";

type SubsectionMode = "button" | "subsection";

interface SubsectionProps {
  /**
   * 选项的数组
   * @default ""
   */
  list?: string[] | Record<string, any>[];
  /**
   * 从list元素对象中读取的键名
   * @default "name"
   */
  keyName?: string;
  /**
   * 初始化时默认选中的选项索引值
   * @default 0
   */
  current?: string | number;
  /**
   * 激活时的颜色
   * @default "#3c9cff"
   */
  activeColor?: string;
  /**
   * 未激活时的颜色
   * @default "#303133"
   */
  inactiveColor?: string;
  /**
   * 模式选择
   * @default "button"
   */
  mode?: SubsectionMode;
  /**
   * 字体大小，单位px(rpx)
   * @default 12
   */
  fontSize?: string | number;
  /**
   * 激活选项的字体是否加粗
   * @default true
   */
  bold?: boolean;
  /**
   * 组件背景颜色，mode为button时有效
   * @default "#eeeeef"
   */
  bgColor?: string;
  /**
   * 自定义外部样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
  /**
   * 自定义bar样式
   * @default ""
   */
  customItemStyle?: string | Record<string, any>;
}

interface SubsectionEvents {
  /**
   * 分段器选项发生改变时触发
   * @param {number} index 选项的index索引值，从0开始
   */
  ["onChange"]?: (index: number) => any;
}

interface _Subsection
  extends BaseComponent<SubsectionProps & SubsectionEvents> {}

export type {
  SubsectionProps as UvSubsectionProps,
  SubsectionEvents as UvSubsectionEvents,
  _Subsection as UvSubsection,
};

declare global {
  namespace UniHelper {
    export type UvSubsectionProps = SubsectionProps;
    export type UvSubsectionEvents = SubsectionEvents;
    export type UvSubsection = _Subsection;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvSubsection: _Subsection;
  }
}
