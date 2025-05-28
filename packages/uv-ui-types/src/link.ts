import type { BaseComponent } from "./_common";

interface LinkProps {
  /**
   * 文字颜色
   * @default ""
   */
  color?: string;
  /**
   * 字体大小，默认单位px(rpx)
   * @default 15
   */
  fontSize?: string | number;
  /**
   * 是否显示下划线
   * @default false
   */
  underLine?: boolean;
  /**
   * 跳转的链接，要带上http(s)
   * @default ""
   */
  href?: string;
  /**
   * 各个小程序平台把链接复制到粘贴板后的提示语
   * @default "链接已复制，请在浏览器打开"
   */
  mpTips?: string;
  /**
   * 划线颜色，默认同color参数颜色
   * @default ""
   */
  lineColor?: string;
  /**
   * 超链接的问题，不使用slot形式传入，是因为nvue下无法修改颜色
   * @default ""
   */
  text?: string;
}

interface LinkEvents {
  /**
   * 点击链接时触发
   */
  ["onClick"]?: () => any;
}

interface _Link extends BaseComponent<LinkProps & LinkEvents> {}

export type {
  LinkProps as UvLinkProps,
  LinkEvents as UvLinkEvents,
  _Link as UvLink,
};

declare global {
  namespace UniHelper {
    export type UvLinkProps = LinkProps;
    export type UvLinkEvents = LinkEvents;
    export type UvLink = _Link;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvLink: _Link;
  }
}
