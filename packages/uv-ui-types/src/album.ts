import type { BaseComponent, ImageMode } from "./_common";

interface AlbumProps {
  /**
   * 图片地址列表
   * @description 支持 Array<String> | Array<Object>形式
   * @default ""
   */
  urls?: (string | Record<string, any>)[];
  /**
   * 指定从数组的对象元素中读取哪个属性作为图片地址
   * @default ""
   */
  keyName?: string;
  /**
   * 单图时，图片长边的长度
   * @default 180
   */
  singleSize?: string | number;
  /**
   * 多图时，图片边长
   * @default 70
   */
  multipleSize?: string | number;
  /**
   * 多图时，图片水平和垂直之间的间隔
   * @default 6
   */
  space?: string | number;
  /**
   * 单图时，图片缩放裁剪的模式
   * @default "scaleToFill"
   */
  singleMode?: ImageMode;
  /**
   * 多图时，图片缩放裁剪的模式
   * @default "aspectFill"
   */
  multipleMode?: ImageMode;
  /**
   * 最多展示的图片数量，超出时最后一个位置将会显示剩余图片数量
   * @default 9
   */
  maxCount?: string | number;
  /**
   * 是否可以预览图片
   * @default true
   */
  previewFullImage?: boolean;
  /**
   * 每行展示图片数量，如设置，singleSize和multipleSize将会无效
   * @default 3
   */
  rowCount?: string | number;
  /**
   * 超出maxCount时是否显示查看更多的提示
   * @default true
   */
  showMore?: boolean;
}

interface AlbumEvents {
  /**
   * 某些特殊的情况下，需要让文字与相册的宽度相等，这里事件的形式对外发送
   */
  onAlbumWidth?: (width: string | number) => any;
}

interface _Album extends BaseComponent<AlbumProps & AlbumEvents> {}

export type {
  AlbumProps as UvAlbumProps,
  AlbumEvents as UvAlbumEvents,
  _Album as UvAlbum,
};

declare global {
  namespace UniHelper {
    export type UvAlbumProps = AlbumProps;
    export type UvAlbumEvents = AlbumEvents;
    export type UvAlbum = _Album;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvAlbum: _Album;
  }
}
