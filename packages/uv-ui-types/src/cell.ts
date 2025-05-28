import type { BaseComponent, LinkType } from "./_common";

type CellArrowDirection = "left" | "right" | "up" | "down";
type CellSize = "large" | "normal";

interface CellProps {
  /**
   * 左侧标题
   * @default ""
   */
  title?: string | number;
  /**
   * 标题下方的描述信息
   * @default ""
   */
  label?: string | number;
  /**
   * 右侧的内容
   * @default ""
   */
  value?: string | number;
  /**
   * 左侧图标名称，或者图片链接(本地文件建议使用绝对地址)
   * @default ""
   */
  icon?: string;
  /**
   * 是否禁用cell
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否显示下边框
   * @default true
   */
  border?: boolean;
  /**
   * 内容是否垂直居中(主要是针对右侧的value部分)
   * @default false
   */
  center?: boolean;
  /**
   * 点击后跳转的URL地址
   * @default ""
   */
  url?: string;
  /**
   * 链接跳转的方式，内部使用的是uv-ui封装的route方法，可能会进行拦截操作
   * @default "navigateTo"
   */
  linkType?: LinkType;
  /**
   * 是否开启点击反馈(表现为点击时加上灰色背景)
   * @default false
   */
  clickable?: boolean;
  /**
   * 是否展示右侧箭头并开启点击反馈
   * @default false
   */
  isLink?: boolean;
  /**
   * 是否显示表单状态下的必填星号(此组件可能会内嵌入input组件)
   * @default false
   */
  required?: boolean;
  /**
   * 右侧的图标箭头
   * @default "arrow-right"
   */
  rightIcon?: string;
  /**
   * 右侧箭头的方向
   * @default "right"
   */
  arrowDirection?: CellArrowDirection;
  /**
   * 左侧图标样式
   * @default ""
   */
  iconStyle?: string | Record<string, any>;
  /**
   * 右侧箭头图标的样式
   * @default ""
   */
  rightIconStyle?: string | Record<string, any>;
  /**
   * 标题的样式
   * @default ""
   */
  titleStyle?: string | Record<string, any>;
  /**
   * 单位元的大小
   * @default ""
   */
  size?: CellSize;
  /**
   * 点击cell是否阻止事件传播
   * @default true
   */
  stop?: boolean;
  /**
   * 标识符，用于在click事件中进行返回
   * @default ""
   */
  name?: string | number;
  /**
   * 自定义单元格样式，如：设置padding等样式。如果想在isLink为true状态下不表现出点击态，可以使用此属性设置背景颜色
   * @default ""
   */
  cellStyle?: string | Record<string, any>;
  /**
   * 自定义外部样式，如：设置边框等样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface CellEvents {
  /**
   * 点击cell列表时触发
   * @param {string|number} name props的name参数标识符
   */
  ["onClick"]?: (name: string | number) => any;
}

interface CellSlots {
  /**
   * 自定义左侧标题部分的内容，如需使用，请勿定义title参数，或赋值null即可
   */
  ["title"]?: () => any;
  /**
   * 自定义右侧内容，如需使用，请勿定义value参数，或赋值null即可
   */
  ["value"]?: () => any;
  /**
   * 自定义左侧的图标
   */
  ["icon"]?: () => any;
  /**
   * 自定义右侧图标内容，需设置arrow为false才起作用
   */
  ["right-icon"]?: () => any;
  /**
   * 自定义标题下方的描述内容
   */
  ["label"]?: () => any;
}

interface _Cell extends BaseComponent<CellProps & CellEvents, CellSlots> {}

export type {
  CellProps as UvCellProps,
  CellEvents as UvCellEvents,
  _Cell as UvCell,
};

declare global {
  namespace UniHelper {
    export type UvCellProps = CellProps;
    export type UvCellEvents = CellEvents;
    export type UvCell = _Cell;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvCell: _Cell;
  }
}
