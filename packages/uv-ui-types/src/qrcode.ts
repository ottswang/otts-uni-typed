import type { BaseComponent } from "./_common";

interface QrcodeProps {
  /**
   * 二维码内容
   * @default ""
   */
  value?: string;
  /**
   * 二维码配置选项
   * @default ""
   */
  options?: Record<string, any>;
  /**
   * 二维码尺寸，单位可以是px，rpx
   * @default 200
   */
  size?: string | number;
  /**
   * 导出的文件类型
   * @default "png"
   */
  fileType?: "png" | "jpg";
  /**
   * 是否初始化组件后就开始生成
   * @default true
   */
  start?: boolean;
  /**
   * 是否数据发生改变自动重绘
   * @default true
   */
  auto?: boolean;
  /**
   * canvas 类型，微信小程序默认使用2d，其他为normal
   * @default ""
   */
  type?: "2d" | "normal";
  /**
   * 队列绘制，主要针对nvue端
   * @default false
   */
  queue?: boolean;
  /**
   * 是否队列加载图片，可减少canvas发起的网络资源请求，节省服务器资源
   * @default false
   */
  isQueueLoadImage?: boolean;
  /**
   * loading状态
   * @default true
   */
  loading?: boolean;
  /**
   * H5保存即自动下载（在支持的环境下），默认false为仅弹层提示用户需要长按图片保存，不会自动下载
   * @default false
   */
  h5SaveIsDownload?: boolean;
  /**
   * H5下载名称
   * @default "uvQRCode"
   */
  h5DownloadName?: string;
  /**
   * H5保存二维码时候是否显示提示
   * @version `1.0.3`
   * @default true
   */
  h5SaveTip?: boolean;
}

interface QrcodeEvents {
  /**
   * 生成完成时触发，返回参数 `{ success: true | false }`
   */
  ["onComplete"]?: () => any;
  /**
   * 点击组件时触发
   */
  ["onClick"]?: () => any;
  /**
   * 重绘时触发
   */
  ["onChange"]?: () => any;
}

interface QrcodeSlots {
  /**
   * 自定义加载中的提示内容
   */
  ["loading"]?: () => any;
}

interface _Qrcode
  extends BaseComponent<QrcodeProps & QrcodeEvents, QrcodeSlots> {}

interface MethodParams {
  /**
   * 成功回调
   */
  success?: (res?: any) => any;
  /**
   * 失败回调
   */
  fail?: () => any;
}

interface QrcodeInstance {
  /**
   * 生成二维码
   */
  make: (params?: MethodParams) => any;
  /**
   * 重新生成二维码
   */
  remake: (params?: MethodParams) => any;
  /**
   * 导出临时文件路径。请在 complete 事件返回success=true后调用。
   */
  toTempFilePath: (params?: MethodParams) => any;
  /**
   * 保存二维码到本地相册。为了保证方法调用成功，请在 complete 事件返回success=true后调用。
   */
  save: (params?: MethodParams) => any;
  /**
   * 注册扩展插件，组件仅支持注册type为style的drawCanvas扩展。
   */
  registerStyle: (...args: any[]) => any;
}

export type {
  QrcodeProps as UvQrcodeProps,
  QrcodeEvents as UvQrcodeEvents,
  _Qrcode as UvQrcode,
  QrcodeInstance as UvQrcodeInstance,
};

declare global {
  namespace UniHelper {
    export type UvQrcodeProps = QrcodeProps;
    export type UvQrcodeEvents = QrcodeEvents;
    export type UvQrcode = _Qrcode;
    export type UvQrcodeInstance = QrcodeInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvQrcode: _Qrcode;
  }
}
