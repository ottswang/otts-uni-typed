import type { BaseComponent } from "./_common";

interface SliderProps {
  /**
   * 双向绑定滑块选择值
   * @default 0
   */
  value?: string | number;
  /**
   * 可选的最小值(0-100之间)
   * @default 1
   */
  min?: string | number;
  /**
   * 可选的最大值(0-100之间)
   * @default 100
   */
  max?: string | number;
  /**
   * 选择的步长
   * @default 1
   */
  step?: string | number;
  /**
   * 滑块左侧已选择部分的线条颜色
   * @default "#2979ff"
   */
  activeColor?: string;
  /**
   * 滑块右侧背景条的颜色
   * @default "#c0c4cc"
   */
  backgroundColor?: string;
  /**
   * 滑块的大小，取值范围为 12 - 28
   * @default 18
   */
  blockSize?: string | number;
  /**
   * 滑块的颜色
   * @default "#ffffff"
   */
  blockColor?: string;
  /**
   * 是否显示当前 value
   * @default false
   */
  showValue?: boolean;
  /**
   * 滑块按钮自定义样式
   * @default ""
   */
  blockStyle?: string | Record<string, any>;
  /**
   * 自定义外部样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface SliderEvents {
  /**
   * 更新v-model的（拖动过程中）
   * @param {string|number} value 当前值
   */
  ["onInput"]?: (value: string | number) => any;
  /**
   * 触发事件（拖动过程中）
   * @param {string|number} value 当前值
   */
  ["onChanging"]?: (value: string | number) => any;
  /**
   * 触发事件
   * @param {string|number} value 当前值
   */
  ["onChange"]?: (value: string | number) => any;
}

interface _Slider extends BaseComponent<SliderProps & SliderEvents> {}

export type {
  SliderProps as UvSliderProps,
  SliderEvents as UvSliderEvents,
  _Slider as UvSlider,
};

declare global {
  namespace UniHelper {
    export type UvSliderProps = SliderProps;
    export type UvSliderEvents = SliderEvents;
    export type UvSlider = _Slider;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvSlider: _Slider;
  }
}
