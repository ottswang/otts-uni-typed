import type { BaseComponent, ImageMode } from "./_common";

type UploadAccept = "all" | "media" | "image" | "file" | "video";
type UploadCapture = "album" | "camera";
type UploadCamera = "front" | "back";
type UploadSizeType = "original" | "compressed";

interface FileListOption {
  /**
   * 上传状态
   */
  status?: "uploading" | "success" | "failed";
  /**
   * 提示文本
   */
  message?: string;
  /**
   * 图片地址
   */
  url: string;
}

interface UploadProps {
  /**
   * 显示已上传的文件列表
   * @default ""
   */
  fileList?: FileListOption[];
  /**
   * 接受的文件类型，file只支持H5（只有微信小程序才支持把accept配置为all、media）
   * @default "image"
   */
  accept?: UploadAccept;
  /**
   * 图片或视频拾取模式，当accept为image类型时设置capture可选额外camera可以直接调起摄像头
   * @default "['album', 'camera']""
   */
  capture?: UploadCapture | UploadCapture[];
  /**
   * 当accept为video时生效，是否压缩视频，默认为true
   * @default true
   */
  compressed?: boolean;
  /**
   * 当accept为video时生效，可选值为back或front
   * @default "back"
   */
  camera?: UploadCamera;
  /**
   * 当accept为video时生效，拍摄视频最长拍摄时间，单位秒
   * @default 60
   */
  maxDuration?: number;
  /**
   * 上传区域的图标，只能内置图标
   * @default "camera-fill"
   */
  uploadIcon?: string;
  /**
   * 上传区域的图标的颜色
   * @default "#D3D4D6"
   */
  uploadIconColor?: string;
  /**
   * 是否启用(显示/隐藏)组件
   * @default false
   */
  useBeforeRead?: boolean;
  /**
   * 是否开启图片预览功能
   * @default true
   */
  previewFullImage?: boolean;
  /**
   * 是否开启视频预览功能
   * @default true
   */
  previewFullVideo?: boolean;
  /**
   * 最大选择图片的数量
   * @default 52
   */
  maxCount?: string | number;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 预览上传的图片时的裁剪模式，和image组件mode属性一致
   * @default "aspectFill"
   */
  imageMode?: ImageMode;
  /**
   * 标识符，可以在回调函数的第二项参数中获取
   * @default "file"
   */
  name?: string;
  /**
   * original 原图，compressed 压缩图，默认二者都有，H5无效
   * @default "['original', 'compressed']"
   */
  sizeType?: UploadSizeType[];
  /**
   * 是否开启图片多选，部分安卓机型不支持
   * @default false
   */
  multiple?: boolean;
  /**
   * 是否显示删除按钮
   * @default true
   */
  deletable?: boolean;
  /**
   * 选择单个文件的最大大小，单位B(byte)，默认不限制
   * @default Number.MAX_VALUE
   */
  maxSize?: string | number;
  /**
   * 上传区域的提示文字
   * @default ""
   */
  uploadText?: string;
  /**
   * 内部预览图片区域和选择图片按钮的区域宽度，单位rpx，不能是百分比，或者auto
   * @default 80
   */
  width?: string | number;
  /**
   * 内部预览图片区域和选择图片按钮的区域高度，单位rpx，不能是百分比，或者auto
   * @default 80
   */
  height?: string | number;
  /**
   * 是否在上传完成后展示预览图
   * @default true
   */
  previewImage?: boolean;
  /**
   * 自定义外部样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface UploadEvents {
  /**
   * 读取后的处理函数
   */
  ["onAfterRead"]?: (file: any, lists: any[], name: any) => any;
  /**
   * 读取前的处理函数
   */
  ["onBeforeRead"]?: (file: any, lists: any[], name: any) => any;
  /**
   * 图片大小超出最大允许大小
   */
  ["onOversize"]?: (file: any, lists: any[], name: any) => any;
  /**
   * 全屏预览图片时触发
   */
  ["onClickPreview"]?: (...args: any[]) => any;
  /**
   * 删除图片
   */
  ["onDelete"]?: (...args: any[]) => any[];
}

interface UploadSlots {
  /**
   * 自定义上传样式
   */
  ["default"]?: () => any;
}

interface _Upload
  extends BaseComponent<UploadProps & UploadEvents, UploadSlots> {}

interface UploadInstance {
  /**
   * 读取后的处理函数
   */
  afterRead: (...args: any[]) => any;
  /**
   * 读取前的处理函数
   */
  beforeRead: (...args: any[]) => any;
}

export type {
  UploadProps as UvUploadProps,
  UploadEvents as UvUploadEvents,
  _Upload as UvUpload,
  UploadInstance as UvUploadInstance,
};

declare global {
  namespace UniHelper {
    export type UvUploadProps = UploadProps;
    export type UvUploadEvents = UploadEvents;
    export type UvUpload = _Upload;
    export type UvUploadInstance = UploadInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvUpload: _Upload;
  }
}
