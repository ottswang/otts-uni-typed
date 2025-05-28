import type { BaseComponent, LoadingMode } from "./_common";

interface LoadingPageProps {
  /**
   * 提示内容
   * @default ""
   */
  loadingText?: string | number;
  /**
   * 文字上方用于替换loading动画的图片
   * @default ""
   */
  image?: string;
  /**
   * 加载动画的模式
   * @default "circle"
   */
  loadingMode?: LoadingMode;
  /**
   * 是否加载中
   * @default false
   */
  loading?: boolean;
  /**
   * 背景颜色
   * @default "#ffffff"
   */
  bgColor?: string;
  /**
   * 文字颜色
   * @default "#C8C8C8"
   */
  color?: string;
  /**
   * 文字大小
   * @default 19
   */
  fontSize?: string | number;
  /**
   * 图标大小
   * @default 28
   */
  iconSize?: string | number;
  /**
   * 加载中图标的颜色
   * @default "#C8C8C8"
   */
  loadingColor?: string;
}

interface _LoadingPage extends BaseComponent<LoadingPageProps> {}

export type {
  LoadingPageProps as UvLoadingPageProps,
  _LoadingPage as UvLoadingPage,
};

declare global {
  namespace UniHelper {
    export type UvLoadingPageProps = LoadingPageProps;
    export type UvLoadingPage = _LoadingPage;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvLoadingPage: _LoadingPage;
  }
}
