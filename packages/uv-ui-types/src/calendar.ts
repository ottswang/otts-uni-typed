import type { BaseComponent } from "./_common";

type CalendarMode = "single" | "multiple" | "range";

interface Day {
  bottomInfo?: string;
  /**
   * 日期
   */
  date?: Date;
  /**
   * 天数
   */
  day?: number;
  /**
   * 是否禁止点击该日期
   */
  disabled?: boolean;
  /**
   * 是否显示右上角红点
   */
  dot?: boolean;
  /**
   * 月份
   */
  month?: number;
  /**
   * 头部文案
   */
  topInfo?: string;
  /**
   * 星期几
   */
  week?: number;
}

interface CalendarProps {
  /**
   * 标题内容
   * @default "日期选择"
   */
  title?: string;
  /**
   * 是否显示标题
   * @default true
   */
  showTitle?: boolean;
  /**
   * 是否显示副标题
   * @default true
   */
  showSubtitle?: boolean;
  /**
   * 日期类型选择
   * @description multiple-可以选择多个日期，range-选择日期范围（多个月需配合monthNum属性使用）
   * @default "single"
   */
  mode?: CalendarMode;
  /**
   * mode=range时，第一个日期底部的提示文字
   * @default "开始"
   */
  startText?: string;
  /**
   * mode=range时，最后一个日期底部的提示文字
   * @default "结束"
   */
  endText?: string;
  /**
   * 自定义列表
   * @default []
   */
  customList?: string[];
  /**
   * 主题色，对底部按钮和选中日期有效
   * @default "#3c9cff"
   */
  color?: string;
  /**
   * 最小的可选日期
   * @default 0
   */
  minDate?: string | number;
  /**
   * 最大可选日期
   * @default 0
   */
  maxDate?: string | number;
  /**
   * 默认选中的日期，mode为multiple或range是必须为数组格式
   * @default null
   */
  defaultDate?: string | Date | (string | Date)[];
  /**
   * mode=multiple时，最多可选多少个日期
   * @default Number.MAX_SAFE_INTEGER
   */
  maxCount?: string | number;
  /**
   * 日期行高
   * @default 56
   */
  rowHeight?: string | number;
  /**
   * 是否显示农历
   * @default false
   */
  showLunar?: boolean;
  /**
   * 是否显示月份背景色
   * @default true
   */
  showMark?: boolean;
  /**
   * 确定按钮的文字
   * @default "确定"
   */
  confirmText?: string;
  /**
   * 确认按钮处于禁用状态时的文字
   * @default "确定"
   */
  confirmDisabledText?: string;
  /**
   * 是否允许点击遮罩关闭日历
   * @description （注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）
   * @default false
   */
  closeOnClickOverlay?: boolean;
  /**
   * 是否允许点击确认按钮关闭日历
   * @description 设置为false不影响confirm事件返回
   * @default true
   */
  closeOnClickConfirm?: boolean;
  /**
   * 是否为只读状态
   * @description 只读状态下禁止选择日期
   * @default false
   */
  readonly?: boolean;
  /**
   * 日期区间最多可选天数
   * @description 默认无限制，mode = range时有效
   * @default 无限制
   */
  maxRange?: string | number;
  /**
   * 范围选择超过最多可选天数时的提示文案
   * @description mode = range时有效
   * @default "选择天数不能超过 xx 天"
   */
  rangePrompt?: string;
  /**
   * 范围选择超过最多可选天数时，是否展示提示文案
   * @description mode = range时有效
   * @default true
   */
  showRangePrompt?: boolean;
  /**
   * 是否允许日期范围的起止时间为同一天
   * @description mode = range时有效
   * @default false
   */
  allowSameDay?: boolean;
  /**
   * 圆角值
   * @description 默认无圆角
   * @default 0
   */
  round?: string | number;
  /**
   * 最大展示的月份数量
   * @default 3
   */
  monthNum?: string | number;
}

interface CalendarEvents {
  /**
   * 日期选择完成后触发，若show-confirm为true，则点击确认按钮后触发
   */
  ["onConfirm"]?: (...args: any[]) => any;
  /**
   * 日历关闭时触发
   */
  ["onClose"]?: (...args: any[]) => any;
  /**
   * 点击日期触发
   */
  ["onChange"]?: (...args: any[]) => any;
}

interface _Calendar extends BaseComponent<CalendarProps & CalendarEvents> {}

interface CalendarInstance {
  /**
   * 弹出日历组件
   */
  open: () => any;
  /**
   * 关闭日历组件，可能在:confirmClosePopup = "false"用到
   */
  close: () => any;
  /**
   * 日期格式化函数
   */
  setFormatter: (formatter: (day: Day) => Day) => any;
}

export type {
  CalendarProps as UvCalendarProps,
  CalendarEvents as UvCalendarEvents,
  _Calendar as UvCalendar,
  CalendarInstance as UvCalendarInstance,
};

declare global {
  namespace UniHelper {
    export type UvCalendarProps = CalendarProps;
    export type UvCalendarEvents = CalendarEvents;
    export type UvCalendar = _Calendar;
    export type UvCalendarInstance = CalendarInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvCalendar: _Calendar;
  }
}
