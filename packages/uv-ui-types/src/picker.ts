import type { BaseComponent } from "./_common";

interface PickerProps {
  /**
   * 设置每一列的数据
   */
  columns?: (string | Record<string, any>)[][];
  /**
   * 自定义columns参数中需要展示的text属性键名
   * @default ""
   */
  keyName?: string;
  /**
   * 是否显示顶部的操作栏
   * @default true
   */
  showToolbar?: boolean;
  /**
   * 顶部中间的标题
   * @default ""
   */
  title?: string;
  /**
   * 弹窗圆角
   * @version `1.0.10`
   * @default 0
   */
  round?: string | number;
  /**
   * 加载状态
   * @default false
   */
  loading?: boolean;
  /**
   * 各列中，单个选项的高度
   * @default 44
   */
  itemHeight?: string | number;
  /**
   * 取消按钮的文字
   * @default "取消"
   */
  cancelText?: string;
  /**
   * 确认按钮的文字
   * @default "确定"
   */
  confirmText?: string;
  /**
   * 取消按钮的颜色
   * @default "#909193"
   */
  cancelColor?: string;
  /**
   * 确认按钮的颜色
   * @default "#3c9cff"
   */
  confirmColor?: string;
  /**
   * 文本颜色
   * @version `1.0.5`
   * @default "#606266"
   */
  color?: string;
  /**
   * 选中文本颜色
   * @version `1.0.5`
   * @default "#606266"
   */
  activeColor?: string;
  /**
   * 每列中可见选项的数量
   * @default 5
   */
  visibleItemCount?: string | number;
  /**
   * 是否允许点击遮罩关闭选择器
   * @default true
   */
  closeOnClickOverlay?: boolean;
  /**
   * 是否允许点击确认关闭选择器
   * @default true
   */
  closeOnClickConfirm?: boolean;
  /**
   * 各列的默认索引。如果设置该值不生效，请使用下方的setIndexs()方法
   * @default []
   */
  defaultIndex?: number[];
  /**
   * 是否在手指松开时立即触发change事件。若不开启则会在滚动动画结束后触发change事件，只在微信2.21.1及以上有效
   * @default true
   */
  immediateChange?: boolean;
}

interface PickerEvents {
  /**
   * 点击确定按钮触发
   */
  ["onConfirm"]?: (...args: any[]) => any;
  /**
   * 当选择值变化时触发
   */
  ["onChange"]?: (...args: any[]) => any;
  /**
   * 点击取消按钮触发
   */
  ["onCancel"]?: () => any;
  /**
   * 关闭选择器时触发
   */
  ["onClose"]?: () => any;
}

interface _Picker extends BaseComponent<PickerProps & PickerEvents> {}

interface PickerInstance {
  /**
   * 弹出颜色选择组件
   */
  open: () => any;
  /**
   * 关闭颜色选择组件
   */
  close: () => any;
  /**
   * 设置对应列的选择值
   */
  setIndexs: (key: number[], value: any) => any;
  /**
   * 多列联动时需要用到
   */
  setColumnValues: (index: number, value: any) => any;
}

export type {
  PickerProps as UvPickerProps,
  PickerEvents as UvPickerEvents,
  _Picker as UvPicker,
  PickerInstance as UvPickerInstance,
};

declare global {
  namespace UniHelper {
    export type UvPickerProps = PickerProps;
    export type UvPickerEvents = PickerEvents;
    export type UvPicker = _Picker;
    export type UvPickerInstance = PickerInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvPicker: _Picker;
  }
}
