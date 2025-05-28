import type { BaseComponent } from "./_common";

interface IndexListAnchorProps {
  /**
   * 列表锚点文本内容
   * @default ""
   */
  text?: string | number;
  /**
   * 列表锚点文字颜色
   * @default "#606266"
   */
  color?: string;
  /**
   * 列表锚点文字大小，单位默认px
   * @default 14
   */
  size?: string | number;
  /**
   * 列表锚点背景颜色
   * @default "#dedede"
   */
  bgColor?: string;
  /**
   * 列表锚点高度，单位默认px
   * @default 32
   */
  height?: string | number;
}

interface _IndexListAnchor extends BaseComponent<IndexListAnchorProps> {}

export type {
  IndexListAnchorProps as UvIndexListAnchorProps,
  _IndexListAnchor as UvIndexListAnchor,
};

declare global {
  namespace UniHelper {
    export type UvIndexListAnchorProps = IndexListAnchorProps;
    export type UvIndexListAnchor = _IndexListAnchor;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvIndexListAnchor: _IndexListAnchor;
  }
}
