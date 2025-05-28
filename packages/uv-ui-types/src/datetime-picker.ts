import type { BaseComponent } from "./_common";

type DatetimePickerMode = "datetime" | "date" | "time" | "year-month" | "year";

interface DatetimePickerProps {
  /**
   * 绑定值
   * @default ""
   */
  value: string | number;
  /**
   * 是否显示顶部的操作栏
   * @default true
   */
  showToolbar?: boolean;
  /**
   * 顶部标题
   * @default ""
   */
  title?: string;
  /**
   * 弹窗圆角
   * @version `1.0.12`
   * @default 0
   */
  round?: string | number;
  /**
   * 展示格式
   * @default "datetime"
   */
  mode?: DatetimePickerMode;
  /**
   * 可选的最大时间（时间戳毫秒）
   * @default 最大默认值为后10年
   */
  maxDate?: number;
  /**
   * 是否清空上次选择
   * @default false
   */
  clearDate?: boolean;
  /**
   * 可选的最小时间（时间戳毫秒）
   * @default 最小默认值为前10年
   */
  minDate?: number;
  /**
   * 可选的最小小时，仅mode=time有效
   * @default 0
   */
  minHour?: number;
  /**
   * 可选的最大小时，仅mode=time有效
   * @default 23
   */
  maxHour?: number;
  /**
   * 可选的最小分钟，仅mode=time有效
   * @default 0
   */
  minMinute?: number;
  /**
   * 可选的最大分钟，仅mode=time有效
   * @default 59
   */
  maxMinute?: number;
  /**
   * 选项过滤函数
   * @default null
   */
  filter?: (type: "year" | "month" | "day", options: any[]) => any;
  /**
   * 输入过滤或格式化函数(如需兼容微信小程序，则只能通过setFormatter方法)，上方示例有具体用法
   * @default null
   */
  formatter?: (type: "year" | "month" | "day", value: number) => any;
  /**
   * 是否显示加载中状态
   * @default false
   */
  loading?: boolean;
  /**
   * 各列中，单个选项的高度
   * @default 44
   */
  itemHeight?: string | number;
  /**
   * 取消按钮的文
   * @default "取消"
   */
  cancelText?: string;
  /**
   * 确认按钮的文字
   * @default "确认"
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
   * 每列中可见选项的数量
   * @default 5
   */
  visibleItemCount?: string | number;
  /**
   * 是否允许点击遮罩关闭时间选择器
   * @default true
   */
  closeOnClickOverlay?: boolean;
  /**
   * 是否允许点击确认关闭时间选择器
   * @default true
   */
  closeOnClickConfirm?: boolean;
}

interface DatetimePickerEvents {
  /**
   * 点击确定按钮时触发
   * @param {number} value 所选时间戳
   * @param {DatetimePickerMode} mode 当前模式
   */
  ["onConfirm"]?: (value: number, mode: DatetimePickerMode) => any;
  /**
   * 当选择值变化时触发
   * @param {number} value 所选时间戳
   * @param {DatetimePickerMode} mode 当前模式
   */
  ["onChange"]?: (value: number, mode: DatetimePickerMode) => any;
  /**
   * 点击取消按钮
   */
  ["onCancel"]?: () => any;
  /**
   * 关闭选择器时触发
   */
  ["onClose"]?: () => any;
}

interface _DatetimePicker
  extends BaseComponent<DatetimePickerProps & DatetimePickerEvents> {}

interface DatetimePickerInstance {
  /**
   * 弹出时间选择器组件
   */
  open: () => any;
  /**
   * 关闭时间选择器组件
   */
  close: () => any;
  /**
   * 格式化函数
   */
  setFormatter: (formatter: DatetimePickerProps["formatter"]) => any;
}

export type {
  DatetimePickerProps as UvDatetimePickerProps,
  DatetimePickerEvents as UvDatetimePickerEvents,
  _DatetimePicker as UvDatetimePicker,
  DatetimePickerInstance as UvDatetimePickerInstance,
};

declare global {
  namespace UniHelper {
    export type UvDatetimePickerMode = DatetimePickerMode;
    export type UvDatetimePickerProps = DatetimePickerProps;
    export type UvDatetimePickerEvents = DatetimePickerEvents;
    export type UvDatetimePicker = _DatetimePicker;
    export type UvDatetimePickerInstance = DatetimePickerInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvDatetimePicker: _DatetimePicker;
  }
}
