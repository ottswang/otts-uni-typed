import type { BaseComponent } from "./_common";

interface OverlayProps {
  /**
   * 是否显示遮罩
   * @default false
   */
  show?: boolean;
  /**
   * z-index层级
   * @default 10070
   */
  zIndex?: string | number;
  /**
   * 动画时长，单位毫秒ms
   * @default 300
   */
  duration?: string | number;
  /**
   * 不透明度值，当做rgba的第四个参数
   * @default 0.5
   */
  opacity?: string | number;
}

interface OverlayEvents {
  /**
   * 点击遮罩发送此事件
   */
  ["onClick"]?: () => any;
}

interface OverlaySlots {
  /**
   * 默认插槽，用于在遮罩层上方嵌入内容
   */
  ["default"]?: () => any;
}

interface _Overlay
  extends BaseComponent<OverlayProps & OverlayEvents, OverlaySlots> {}

export type {
  OverlayProps as UvOverlayProps,
  OverlayEvents as UvOverlayEvents,
  _Overlay as UvOverlay,
};

declare global {
  namespace UniHelper {
    export type UvOverlayProps = OverlayProps;
    export type UvOverlayEvents = OverlayEvents;
    export type UvOverlay = _Overlay;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvOverlay: _Overlay;
  }
}
