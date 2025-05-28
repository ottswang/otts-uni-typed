import type { BaseComponent } from "./_common";

interface VtabsProps {
  /**
   * 选项数组，元素为对象，如[{name:'uv-ui简介'}]。元素对象中可设置徽标显示，如[{name:'更新日志', badge: {isDot: true}}]
   * @default []
   */
  list?: any[];
  /**
   * 从list元素对象中读取的键名
   * @default "name"
   */
  keyName?: string;
  /**
   * 当前选中项，从0开始
   * @default 0
   */
  current?: number;
  /**
   * 头部内容的高度，头部有内容必传，否则会有联动误差
   * @version `1.0.4`
   * @default 0
   */
  hdHeight?: string | number;
  /**
   * 是否开启联动，开启后右边区域可以滑动查看内容。注意：`chain=true`时`VtabsItem`的`index`属性必传
   * @default true
   */
  chain?: boolean;
  /**
   * 整个列表的高度，默认auto或空则为屏幕高度
   * @default sys().windowHeight
   */
  height?: string | number;
  /**
   * 左边选项区域的宽度
   * @default "180rpx"
   */
  barWidth?: string | number;
  /**
   * 左边选项区域是否允许滚动
   * @default true
   */
  barScrollable?: boolean;
  /**
   * 左边选项区域的背景颜色
   * @default "$uv-bg-color"
   */
  barBgColor?: string;
  /**
   * 左边选项区域的自定义样式
   * @default ""
   */
  barStyle?: Record<string, any>;
  /**
   * 左边选项区域「每个」选项的自定义样式
   * @default ""
   */
  barItemStyle?: Record<string, any>;
  /**
   * 左边选项区域「选中」选项的自定义样式
   * @default ""
   */
  barItemActiveStyle?: Record<string, any>;
  /**
   * 左边选项区域「选中选项竖线条」的自定义样式，如设置竖条颜色，需设置背景色：`:bar-item-active-line-style="{background: '#2878FF'}"`
   * @default ""
   */
  barItemActiveLineStyle?: Record<string, any>;
  /**
   * 左边选项区域选中选项徽标的自定义样式，**主要用于调整徽标位置**
   * @default ""
   */
  barItemBadgeStyle?: Record<string, any>;
  /**
   * 右边区域自定义样式
   * @default ""
   */
  contentStyle?: Record<string, any>;
}

interface VtabsEvents {
  /**
   * 选择改变时触发
   * @param {number} index 选项索引值
   */
  ["onChange"]?: (index: number) => any;
  /**
   * 内容滚动到底部触发
   * @version `1.0.4`
   * @param {number} index 选项索引值
   */
  ["onScrolltolower"]?: (index: number) => any;
}

interface _Vtabs extends BaseComponent<VtabsProps & VtabsEvents> {}

export type {
  VtabsProps as UvVtabsProps,
  VtabsEvents as UvVtabsEvents,
  _Vtabs as UvVtabs,
};

declare global {
  namespace UniHelper {
    export type UvVtabsProps = VtabsProps;
    export type UvVtabsEvents = VtabsEvents;
    export type UvVtabs = _Vtabs;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvVtabs: _Vtabs;
  }
}
