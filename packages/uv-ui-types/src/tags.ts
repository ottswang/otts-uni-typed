import type { BaseComponent, ColorType, Shape } from "./_common";

type TagsSize = "medium" | "large" | "mini";

interface TagsProps {
  /**
   * 主题类型
   * @default "primary"
   */
  type?: ColorType;
  /**
   * 不可用
   * @default false
   */
  disabled?: boolean;
  /**
   * 标签大小
   * @default "medium"
   */
  size?: TagsSize;
  /**
   * 标签形状
   * @default "square"
   */
  shape?: Shape;
  /**
   * 标签的文字内容
   * @default ""
   */
  text?: string | number;
  /**
   * 背景颜色，默认为空字符串，即不处理
   * @default "#C6C7CB"
   */
  bgColor?: string;
  /**
   * 标签字体颜色，默认为空字符串，即不处理
   * @default ""
   */
  color?: string;
  /**
   * 标签的边框颜色
   * @default ""
   */
  borderColor?: string;
  /**
   * 关闭按钮图标的颜色
   * @default ""
   */
  closeColor?: string;
  /**
   * 点击时返回的索引值，用于区分例遍的数组哪个元素被点击了
   * @default ""
   */
  name?: string | number;
  /**
   * 镂空时是否填充背景色
   * @default false
   */
  plainFill?: boolean;
  /**
   * 是否镂空
   * @default false
   */
  plain?: boolean;
  /**
   * 是否可关闭，设置为true，文字右边会出现一个关闭图标
   * @default false
   */
  closable?: boolean;
  /**
   * 标签显示与否
   * @default true
   */
  show?: boolean;
  /**
   * 内置图标，或绝对路径的图片
   * @default ""
   */
  icon?: string;
  /**
   * 是否属于cell节点下。nvue模式下的该组件在cell或uv-list等组件下使用，该值最好是设置成true，避免回收后不显示的BUG。	Boolean	false	true | false
   * @default false
   */
  cellChild?: boolean;
}

interface TagsEvents {
  /**
   * 点击标签触发
   * @param {string|number} index 传递的index参数值
   */
  ["onClick"]?: (index: string | number) => any;
  /**
   * closable为true时，点击标签关闭按钮触发
   * @param {string|number} index 传递的index参数值
   */
  ["onClose"]?: (index: string | number) => any;
}

interface _Tags extends BaseComponent<TagsProps & TagsEvents> {}

export type {
  TagsProps as UvTagsProps,
  TagsEvents as UvTagsEvents,
  _Tags as UvTags,
};

declare global {
  namespace UniHelper {
    export type UvTagsProps = TagsProps;
    export type UvTagsEvents = TagsEvents;
    export type UvTags = _Tags;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvTags: _Tags;
  }
}
