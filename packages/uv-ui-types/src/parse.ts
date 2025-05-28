import type { BaseComponent } from "./_common";

interface ParseProps {
  /**
   * 容器的样式
   * @version `1.0.3`
   * @default ""
   */
  containerStyle?: string;
  /**
   * 用于渲染的 html 字符串
   * @default ""
   */
  content?: string;
  /**
   * 是否允许外部链接被点击时自动复制
   * @default true
   */
  copyLink?: boolean;
  /**
   * 主域名（用于链接拼接）
   * @default ""
   */
  domain?: string;
  /**
   * 图片出错时的占位图链接
   * @default ""
   */
  errorImg?: string;
  /**
   * 是否开启图片懒加载
   * @default false
   */
  lazyLoad?: boolean;
  /**
   * 图片加载过程中的占位图链接
   * @default ""
   */
  loadingImg?: string;
  /**
   * 是否在播放一个视频时自动暂停其他视频
   * @default true
   */
  pauseVideo?: boolean;
  /**
   * 是否开启图片被点击时自动预览
   * @default true
   */
  previewImg?: boolean;
  /**
   * 是否给每个表格添加一个滚动层使其能单独横向滚动
   * @default false
   */
  scrollTable?: boolean;
  /**
   * 是否开启长按复制内容
   * @default false
   */
  selectable?: boolean;
  /**
   * 是否将 title 标签的内容设置到页面标题
   * @default true
   */
  setTitle?: boolean;
  /**
   * 是否允许图片被长按时显示菜单
   * @default true
   */
  showImgMenu?: boolean;
  /**
   * 设置标签的默认样式
   * @default ""
   */
  tagStyle?: Record<string, any>;
  /**
   * 是否使用锚点链接
   * @default false
   */
  useAnchor?: boolean;
}

interface ParseEvents {
  /**
   * dom 树加载完成时触发
   */
  ["onLoad"]?: () => any;
  /**
   * 渲染完成时触发，返回 boundingClientRect 的查询结果（包含宽高、位置等信息），所有图片（除懒加载）加载完成时才会触发，图片较大时可能 延时较长
   */
  ["onReady"]?: (...args: any[]) => any;
  /**
   * 出错时触发，返回一个 object，其中 source 是错误来源，errMsg 为错误信息，target 包含出错标签的具体信息
   */
  ["onError"]?: (...args: any[]) => any;
  /**
   * 图片被点击时触发，返回一个 object，其中 src 是图片链接。可以在 img 标签 设置 ignore="1" 在事件中调用将不进行预览
   */
  ["onImgtap"]?: (...args: any[]) => any;
  /**
   * 在链接被点击时触发，返回一个 object，其中包含了被点击的 a 标签的所有属性。如果需要链接不进行跳转/复制等操作，可以在 a 标签设置href="javascript:;"。可在该事件中进行下载文档等进一步操作
   */
  ["onLinktap"]?: (...args: any[]) => any;
  /**
   * 音视频播放时触发
   */
  ["onPlay"]?: () => any;
}

interface _Parse extends BaseComponent<ParseProps & ParseEvents> {}

export type {
  ParseProps as UvParseProps,
  ParseEvents as UvParseEvents,
  _Parse as UvParse,
};

declare global {
  namespace UniHelper {
    export type UvParseProps = ParseProps;
    export type UvParseEvents = ParseEvents;
    export type UvParse = _Parse;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvParse: _Parse;
  }
}
