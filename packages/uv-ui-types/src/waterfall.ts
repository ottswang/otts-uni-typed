import type { BaseComponent } from "./_common";

interface WaterfallProps {
  /**
   * 瀑布流数据，（vue生效）
   * @default []
   */
  value?: any[];
  /**
   * 数据的id值，根据id值对数据可执行删除操作。如数据为：{id: 1, name: 'uv-ui'}，那么该值设置为id，（vue生效）
   * @default "id"
   */
  idKey?: string;
  /**
   * 每次插入数据的事件间隔，间隔越长能保证两列高度相近，但是用户体验不好，单位ms，（vue生效）
   * @default 200
   */
  addTime?: number;
  /**
   * 瀑布流的列数，默认2，最高为5
   * @default 2
   */
  columnCount?: string | number;
  /**
   * 列与列的间隙，默认单位px
   * @default 20
   */
  columnGap?: string | number;
  /**
   * 左边和列表的间隙，默认单位px
   * @default 0
   */
  leftGap?: string | number;
  /**
   * 右边和列表的间隙，默认单位px
   * @default 0
   */
  rightGap?: string | number;
  /**
   * 是否显示滚动条，（nvue生效）
   * @default false
   */
  showScrollbar?: boolean;
  /**
   * 列宽，单位px，（nvue生效）
   * @default "auto"
   */
  columnWidth?: string | number;
  /**
   * 瀑布流的宽度，（nvue生效）
   * @default 屏幕宽度
   */
  width?: string;
  /**
   * 瀑布流的高度，（nvue生效）
   * @default 屏幕高度
   */
  height: string;
}

interface WaterfallEvents {
  /**
   * 【必须使用】 处理数据时触发，为了兼容某些端不支持插槽回传参数的情况（vue生效）
   */
  ["onChangeList"]?: (...args: any[]) => any;
  /**
   * 瀑布流加载完成触发事件，（vue生效）
   */
  ["onFinish"]?: () => any;
  /**
   * 清空数据列表触发事件，（vue生效）
   */
  ["onClear"]?: () => any;
  /**
   * 删除列表中某条数据触发事件，（vue生效）
   */
  ["onRemove"]?: (id: any) => any;
  /**
   * 滚动到底部触发事件，（nvue生效）
   */
  ["onScrolltolower"]?: () => any;
}

interface WaterfallSlots {
  /**
   * 瀑布流内容
   */
  ["default"]?: () => any;
}

interface _Waterfall
  extends BaseComponent<WaterfallProps & WaterfallEvents, WaterfallSlots> {}

interface WaterfallInstance {
  /**
   * 瀑布流加载完毕事件，（vue生效）
   */
  finish: () => any;
  /**
   * 清除指定的某一条数据，根据id来实现，删除后v-model绑定的数据会自动变化，（vue生效）
   */
  remove: (id: any) => any;
  /**
   * 清除瀑布流数据，（vue生效）
   */
  clear: () => any;
}

export type {
  WaterfallProps as UvWaterfallProps,
  WaterfallEvents as UvWaterfallEvents,
  _Waterfall as UvWaterfall,
  WaterfallInstance as UvWaterfallInstance,
};

declare global {
  namespace UniHelper {
    export type UvWaterfallProps = WaterfallProps;
    export type UvWaterfallEvents = WaterfallEvents;
    export type UvWaterfall = _Waterfall;
    export type UvWaterfallInstance = WaterfallInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvWaterfall: _Waterfall;
  }
}
