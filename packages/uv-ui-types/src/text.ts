import type { BaseComponent, ColorType } from "./_common";
import type { UvButtonOpenType } from "./button";

type TextMode = "text" | "price" | "phone" | "name" | "date" | "link";
type TextDecoration = "none" | "underline" | "line-through";
type TextAlign = "left" | "center" | "right";
type TextWordWrap = "normal" | "break-word" | "anywhere";

interface TextProps {
  /**
   * 显示的值
   * @default ""
   */
  text?: string | number;
  /**
   * 主题颜色
   * @default ""
   */
  type?: ColorType;
  /**
   * 是否显示
   * @default false
   */
  show?: boolean;
  /**
   * 前置图标
   * @default ""
   */
  prefixIcon?: string;
  /**
   * 后置图标
   * @default ""
   */
  suffixIcon?: string;
  /**
   * 文本处理的匹配模式
   * @default ""
   */
  mode?: TextMode;
  /**
   * mode=link下，配置的链接
   * @default ""
   */
  href?: string;
  /**
   * 格式化规则
   * @default ""
   */
  format?: string | ((...args: any) => any);
  /**
   * mode=phone时，点击文本是否拨打电
   * @default false
   */
  call?: boolean;
  /**
   * 小程序的打开方式
   * @default ""
   */
  openType?: UvButtonOpenType;
  /**
   * 是否粗体，默认normal
   * @default false
   */
  bold?: boolean;
  /**
   * 是否块状
   * @default false
   */
  block?: boolean;
  /**
   * 文本显示的行数，如果设置，超出此行数，将会显示省略号
   * @default ""
   */
  lines?: string | number;
  /**
   * 文本颜色
   * @default "#303133"
   */
  color?: string;
  /**
   * 字体大小
   * @default 15
   */
  size?: string | number;
  /**
   * 图标的样式
   * @default "15px"
   */
  iconStyle?: Record<string, any> | string;
  /**
   * 文字装饰，下划线，中划线等
   * @default "none"
   */
  decoration?: TextDecoration;
  /**
   * 外边距，对象、字符串，数值形式均可
   * @default ""
   */
  margin?: string | number | Record<string, any>;
  /**
   * 文本行高
   * @default ""
   */
  lineHeight?: string | number;
  /**
   * 文本对齐方式
   * @default "left"
   */
  align?: TextAlign;
  /**
   * 文字换行
   * @default "normal"
   */
  wordWrap?: TextWordWrap;
  /**
   * 自定义样式，eg：:custom-style="{color:'red',width:'20px'}"
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface TextEvents {
  /**
   * 点击触发事件
   */
  ["onClick"]?: () => any;
}

interface _Text extends BaseComponent<TextProps & TextEvents> {}

export type {
  TextProps as UvTextProps,
  TextEvents as UvTextEvents,
  _Text as UvText,
};

declare global {
  namespace UniHelper {
    export type UvTextProps = TextProps;
    export type UvTextEvents = TextEvents;
    export type UvText = _Text;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvText: _Text;
  }
}
