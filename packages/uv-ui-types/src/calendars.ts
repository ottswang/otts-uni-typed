import type { BaseComponent } from "./_common";

type CalendarsMode = "multiple" | "range";

interface SelectedItem {
  /**
   * 日期，格式：YYYY-mm-dd
   */
  date?: string;
  /**
   * 底部文案
   */
  info?: string;
  /**
   * 底部文案颜色
   */
  infoColor?: string;
  /**
   * 头部文案
   */
  topinfo?: string;
  /**
   * 头部文案颜色
   */
  topinfoColor?: string;
  /**
   * 是否显示右上角红点
   */
  badge?: boolean;
  /**
   * 是否禁止点击该日期
   */
  disable?: boolean;
}

interface CalendarsProps {
  /**
   * 自定义默认选中日期
   * @description 不传默认为今天。mode="multiple"或mode="range"时，该值为数组，例 ['2023-08-26','2023-08-29']。mode不传或字符串，例如2023-08-26，即为单日期模式
   * @default new Date()
   */
  date?: string;
  /**
   * 显示农历
   * @default false
   */
  lunar?: boolean;
  /**
   * 日期类型选择
   * @description 可选值：不填 | multiple | range，分别为单日期选择，多日期选择，范围选择
   * @default ""
   */
  mode?: CalendarsMode;
  /**
   * 插入模式
   * @description 可选值，true：插入模式；false：弹窗模式；默认为插入模式
   * @default false
   */
  insert?: boolean;
  /**
   * 弹窗模式是否清空上次选择内容
   * @default true
   */
  clearDate?: boolean;
  /**
   * 打点
   * @description 期待格式[{date: '2019-06-27', info: '签到', disable: false}]
   * @default ""
   */
  selected?: SelectedItem[];
  /**
   * 日期选择范围-开始日期
   * @description 格式如："2023-01-01"
   * @default ""
   */
  startDate?: string;
  /**
   * 日期选择范围-结束日期
   * @description 格式如："2023-02-01"
   * @default ""
   */
  endDate?: string;
  /**
   * 是否显示月份为背景
   * @default true
   */
  showMonth?: boolean;
  /**
   * 弹窗模式，圆角
   * @default "8px"
   */
  round?: string | number;
  /**
   * 主题颜色
   * @default "#3c9cff"
   */
  color?: string;
  /**
   * 确认按钮颜色
   * @default "#3c9cff"
   */
  confirmColor?: string;
  /**
   * 取消按钮颜色
   * @default "#909193"
   */
  cancelColor?: string;
  /**
   * 点击遮罩是否关闭弹窗
   * @default true
   */
  closeOnClickOverlay?: boolean;
  /**
   * range为true时，第一个日期底部的提示文字
   * @default "开始"
   */
  startText?: string;
  /**
   * range为true时，最后一个日期底部的提示文字
   * @default "结束"
   */
  endText?: string;
  /**
   * 是否允许日期范围的起止时间为同一天，mode = range时有效
   * @version `1.0.11`
   * @default false
   */
  allowSameDay?: boolean;
  /**
   * 是否为只读状态，只读状态下禁止选择日期
   * @version `1.0.15`
   * @default false
   */
  readonly?: boolean;
}

interface CalendarsEvents {
  /**
   * 点击确定按钮触发，返回日期相关参数
   */
  ["onConfirm"]?: (...args: any[]) => any;
  /**
   * 关闭日历时触发
   */
  ["onClose"]?: () => any;
  /**
   * 点击日期时触发，返回日期相关参数
   */
  ["onChange"]?: (...args: any[]) => any;
  /**
   * 选择年月确认时触发，参数格式 `{ year: 2030, month: '08' }`
   */
  ["onMonthSwitch"]?: (...args: any[]) => any;
}

interface _Calendars extends BaseComponent<CalendarsProps & CalendarsEvents> {}

interface CalendarsInstance {
  /**
   * `insert` 为 `false` 时，调用此方法弹出日历组件
   */
  open: () => any;
}

export type {
  CalendarsMode as UvCalendarsMode,
  SelectedItem as UvCalendarsSelectedItem,
  CalendarsProps as UvCalendarsProps,
  CalendarsEvents as UvCalendarsEvents,
  CalendarsInstance as UvCalendarsInstance,
  _Calendars as UvCalendars,
};

declare global {
  namespace UniHelper {
    export type UvCalendarsMode = CalendarsMode;
    export type UvCalendarsSelectedItem = SelectedItem;
    export type UvCalendarsProps = CalendarsProps;
    export type UvCalendarsEvents = CalendarsEvents;
    export type UvCalendarsInstance = CalendarsInstance;
    export type UvCalendars = _Calendars;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvCalendars: _Calendars;
  }
}
