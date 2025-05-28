import type { BaseComponent } from "./_common";
import type { UvInputConfirmType } from "./input";

type TextareaBorder = "surround" | "bottom" | "none";

interface TextareaProps {
  /**
   * 输入框的内容
   * @default ""
   */
  value?: string | number;
  /**
   * 输入框为空时占位符
   * @default ""
   */
  placeholder?: string | number;
  /**
   * 输入框高度
   * @default 70
   */
  height?: string | number;
  /**
   * 设置键盘右下角按钮的文字，仅微信小程序，App-vue和H5有效
   * @default "return"
   */
  confirmType?: UvInputConfirmType | "return";
  /**
   * 点击键盘右下角按钮时是否保持键盘不收起
   * @default false
   */
  confirmHold?: boolean;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否显示统计字数
   * @default false
   */
  count?: boolean;
  /**
   * 是否自动获取焦点，nvue不支持，H5取决于浏览器的实现
   * @default false
   */
  focus?: boolean;
  /**
   * 是否自动增加高度
   * @default false
   */
  autoHeight?: boolean;
  /**
   * 是否忽略组件内对文本合成系统事件的处理。为 false 时将触发 compositionstart、compositionend、compositionupdate 事件，且在文本合成期间会触发 input 事件
   * @default true
   */
  ignoreCompositionEvent?: boolean;
  /**
   * 如果textarea是在一个position:fixed的区域，需要显示指定属性fixed为true
   * @default false
   */
  fixed?: boolean;
  /**
   * 指定光标与键盘的距离
   * @default 0
   */
  cursorSpacing?: number;
  /**
   * 指定focus时的光标位置
   * @default ""
   */
  cursor?: string | number;
  /**
   * 是否显示键盘上方带有”完成“按钮那一栏，
   * @default true
   */
  showConfirmBar?: boolean;
  /**
   * 光标起始位置，自动聚焦时有效，需与selection-end搭配使用
   * @default -1
   */
  selectionStart?: number;
  /**
   * 光标结束位置，自动聚焦时有效，需与selection-start搭配使用
   * @default -1
   */
  selectionEnd?: number;
  /**
   * 键盘弹起时，是否自动上推页面
   * @default true
   */
  adjustPosition?: boolean;
  /**
   * 是否去掉 iOS 下的默认内边距，只微信小程序有效
   * @default false
   */
  disableDefaultPadding?: boolean;
  /**
   * focus时，点击页面的时候不收起键盘，只微信小程序有效
   * @default false
   */
  holdKeyboard?: boolean;
  /**
   * 最大输入长度，设置为 -1 的时候不限制最大长度，设置 -1 则设置的 count 失效。（注意：maxlength都是小写）
   * @default 140
   */
  maxlength?: string | number;
  /**
   * 边框类型
   * @default "surround"
   */
  border?: TextareaBorder;
  /**
   * 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/
   * @default "textarea-placeholder"
   */
  placeholderClass?: string;
  /**
   * 指定placeholder的样式，字符串/对象形式，如"color: red;"
   * @default "color: #c0c4cc"
   */
  placeholderStyle?: string | Record<string, any>;
  /**
   * 输入过滤或格式化函数(如需兼容微信小程序，则只能通过setFormatter方法)
   * @default null
   */
  formatter?: (value: any) => any;
  /**
   * 自定义文本样式
   * @default ""
   */
  textStyle?: Record<string, any>;
  /**
   * 自定义统计数字的样式
   * @default ""
   */
  countStyle?: Record<string, any>;
  /**
   * 自定义外部样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface TextareaEvents {
  /**
   * 输入框聚焦时触发
   */
  ["onFocus"]?: (...args: any[]) => any;
  /**
   * 输入框失去焦点时触发
   */
  ["onBlur"]?: (...args: any[]) => any;
  /**
   * 输入框行数变化时调用
   */
  ["onLinechange"]?: (...args: any[]) => any;
  /**
   * 当键盘输入时，触发 input 事件
   */
  ["onInput"]?: (...args: any[]) => any;
  /**
   * 点击完成时， 触发 confirm 事件
   */
  ["onConfirm"]?: (...args: any[]) => any;
  /**
   * 键盘高度发生变化的时候触发此事件
   */
  ["onKeyboardheightchange"]?: (...args: any[]) => any;
}

interface _Textarea extends BaseComponent<TextareaProps & TextareaEvents> {}

interface TextareaInstance {
  /**
   * 为兼容微信小程序而暴露的内部方法
   */
  setFormatter: (formatter: TextareaProps["formatter"]) => any;
}

export type {
  TextareaProps as UvTextareaProps,
  TextareaEvents as UvTextareaEvents,
  _Textarea as UvTextarea,
  TextareaInstance as UvTextareaInstance,
};

declare global {
  namespace UniHelper {
    export type UvTextareaProps = TextareaProps;
    export type UvTextareaEvents = TextareaEvents;
    export type UvTextarea = _Textarea;
    export type UvTextareaInstance = TextareaInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvTextarea: _Textarea;
  }
}
