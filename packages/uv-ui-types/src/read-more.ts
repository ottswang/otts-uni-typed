import type { BaseComponent } from "./_common";

interface ShadowStyle {
  /**
   * 如果您不想要阴影，将backgroundImage设置为none即可
   */
  backgroundImage?: string;
  /**
   * 自行调整至合适数值即可
   */
  paddingTop?: string;
  /**
   * 自行调整至合适数值即可
   */
  marginTop?: string;
}

interface ReadMoreProps {
  /**
   * 内容超出此高度才会显示展开全文按钮，单位rpx
   * @default 400
   */
  showHeight?: string | number;
  /**
   * 展开后是否显示收起按钮
   * @default false
   */
  toggle?: boolean;
  /**
   * 关闭时的提示文字
   * @default "展开阅读全文"
   */
  closeText?: string;
  /**
   * 展开时的提示文字
   * @default "收起"
   */
  openText?: string;
  /**
   * 提示文字的颜色
   * @default "#2979ff"
   */
  color?: string;
  /**
   * 提示文字的大小，默认单位px
   * @default 14
   */
  fontSize?: string | number;
  /**
   * 对阴影的自定义处理
   */
  shadowStyle?: ShadowStyle;
  /**
   * 段落首行缩进的字符个数
   * @default "2em"
   */
  textIndent?: string;
  /**
   * 用于在open和close事件中当作回调参数返回
   * @default ""
   */
  name?: string | number;
}

interface ReadMoreEvents {
  /**
   * 内容被展开时触发
   * @param {string|number} name props中传入的name参数值
   */
  ["onOpen"]?: (name: string | number) => any;
  /**
   * 内容被收起时触发
   * @param {string|number} name props中传入的name参数值
   */
  ["onClose"]?: (name: string | number) => any;
}

interface _ReadMore extends BaseComponent<ReadMoreProps & ReadMoreEvents> {}

interface ReadMoreInstance {
  /**
   * 重新初始化组件内部高度计算过程，如果内嵌uv-parse组件时可能需要用到
   */
  init: () => any;
}

export type {
  ReadMoreProps as UvReadMoreProps,
  ReadMoreEvents as UvReadMoreEvents,
  _ReadMore as UvReadMore,
  ReadMoreInstance as UvReadMoreInstance,
};

declare global {
  namespace UniHelper {
    export type UvReadMoreProps = ReadMoreProps;
    export type UvReadMoreEvents = ReadMoreEvents;
    export type UvReadMore = _ReadMore;
    export type UvReadMoreInstance = ReadMoreInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvReadMore: _ReadMore;
  }
}
