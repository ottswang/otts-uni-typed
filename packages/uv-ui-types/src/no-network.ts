import type { BaseComponent } from "./_common";

interface NoNetworkProps {
  /**
   * 没有网络时的提示语
   * @default "哎呀，网络信号丢失"
   */
  tips?: string;
  /**
   * 无网络的图片提示，可用的src地址或base64图片
   * @default ""
   */
  image?: string;
}

interface NoNetworkEvents {
  /**
   * 用户点击页面的"重试"按钮时触发
   */
  ["onRetry"]?: () => any;
  /**
   * "重试"后，有网络触发
   */
  ["onConnected"]?: () => any;
  /**
   * "重试"后，无网络触发
   */
  ["onDisconnected"]?: () => any;
}

interface _NoNetwork extends BaseComponent<NoNetworkProps & NoNetworkEvents> {}

export type {
  NoNetworkProps as UvNoNetworkProps,
  NoNetworkEvents as UvNoNetworkEvents,
  _NoNetwork as UvNoNetwork,
};

declare global {
  namespace UniHelper {
    export type UvNoNetworkProps = NoNetworkProps;
    export type UvNoNetworkEvents = NoNetworkEvents;
    export type UvNoNetwork = _NoNetwork;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvNoNetwork: _NoNetwork;
  }
}
