import type { BaseComponent } from "./_common";

interface SafeBottomProps {
  /**
   * 自定义外部样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface _SafeBottom extends BaseComponent<SafeBottomProps> {}

export type {
  SafeBottomProps as UvSafeBottomProps,
  _SafeBottom as UvSafeBottom,
};

declare global {
  namespace UniHelper {
    export type UvSafeBottomProps = SafeBottomProps;
    export type UvSafeBottom = _SafeBottom;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvSafeBottom: _SafeBottom;
  }
}
