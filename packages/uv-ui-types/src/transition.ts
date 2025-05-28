import type { BaseComponent } from "./_common";

type Mode =
  | "fade"
  | "slide-top"
  | "slide-bottom"
  | "slide-left"
  | "slide-right"
  | "zoom-in"
  | "zoom-out";

type TimingFunction =
  | "linear"
  | "ease"
  | "ease-in"
  | "ease-in-out"
  | "ease-out"
  | "step-start"
  | "step-end";

interface TransitionProps {
  /**
   * 控制组件显示或关闭
   * @default false
   */
  show?: boolean;
  /**
   * 内置过渡动画类型，同一种类型相反的过渡动画如（slide-top、slide-bottom）同时使用时，只有最后一个生效
   * @default "fade"
   */
  mode?: Mode | Mode[];
  /**
   * 动画的执行时间，单位`ms`
   * @default 300
   */
  duration?: string | number;
  /**
   * 使用的动画过渡函数
   * @default "ease-out"
   */
  timingFunction?: TimingFunction;
  /**
   * 自定义类名
   * @default ""
   */
  customClass?: string;
  /**
   * 是否属于cell节点下。nvue模式下的该组件在cell或uv-list等组件下使用，该值最好是设置成true，避免回收后不显示的BUG。
   * @default false
   */
  cellChild?: boolean;
  /**
   * 自定义样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface TransitionEvents {
  /**
   * 点击组件触发
   */
  ["onClick"]?: () => any;
  /**
   * 过渡动画结束时触发，回调参数 `e = {detail:true | false}`
   */
  ["onChange"]?: (...args: any[]) => any;
}

interface _Transition
  extends BaseComponent<TransitionProps & TransitionEvents> {}

interface Config {
  /**
   * 动画持续时间，单位ms
   * @default 400
   */
  duration?: number;
  /**
   * 使用的动画过渡函数
   * @default "linear"
   */
  timingFunction?: TimingFunction;
  /**
   * 动画延迟时间，单位ms
   * @default 0
   */
  delay?: number;
  /**
   * 动画执行是否影响布局，仅 nvue 支持
   * @default false
   */
  needLayout?: boolean;
  /**
   * 设置 transform-origin
   * @default "center center"
   */
  transformOrigin?: string;
}

interface Type {
  /**
   * 透明度，参数范围 0~1
   * @default ""
   */
  opacity?: number;
  /**
   * 颜色值
   * @default ""
   */
  backgroundColor?: string;
  /**
   * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
   * @default ""
   */
  width?: string | number;
  /**
   * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
   * @default ""
   */
  height?: string | number;
  /**
   * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值，nvue 不支持
   * @default ""
   */
  top?: string | number;
  /**
   * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值，nvue 不支持
   * @default ""
   */
  left?: string | number;
  /**
   * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值，nvue 不支持
   * @default ""
   */
  bottom?: string | number;
  /**
   * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值，nvue 不支持
   * @default ""
   */
  right?: string | number;
  /**
   * deg的范围-180~180，从原点顺时针旋转一个deg角度
   * @default ""
   */
  rotate?: number;
  /**
   * deg的范围-180~180，在X轴旋转一个deg角度
   * @default ""
   */
  rotateX?: number;
  /**
   * deg的范围-180~180，在Y轴旋转一个deg角度
   * @default ""
   */
  rotateY?: number;
  /**
   * deg的范围-180~180，在Z轴旋转一个deg角度，nvue不支持
   * @default ""
   */
  rotateZ?: number;
  /**
   * 同 transform-function rotate3d
   * @default ""
   */
  rotate3d?: number[];
  /**
   * 一个参数时，表示在X轴、Y轴同时缩放sx倍数；两个参数时表示在X轴缩放sx倍数，在Y轴缩放sy倍数
   * @default ""
   */
  scale?: number | number[];
  /**
   * 在X轴缩放sx倍数
   * @default ""
   */
  scaleX?: number;
  /**
   * 在Y轴缩放sy倍数
   * @default ""
   */
  scaleY?: number;
  /**
   * 在Z轴缩放sy倍数，nvue不支持
   * @default ""
   */
  scaleZ?: number;
  /**
   * 在X轴缩放sx倍数，在Y轴缩放sy倍数，在Z轴缩放sz倍数，nvue不支持
   * @default ""
   */
  scale3d?: number[];
  /**
   * 一个参数时，表示在X轴偏移tx，单位px；两个参数时，表示在X轴偏移tx，在Y轴偏移ty，单位px。
   * @default ""
   */
  translate?: string | string[];
  /**
   * 在X轴偏移tx，单位px
   * @default ""
   */
  translateX?: string;
  /**
   * 在Y轴偏移tx，单位px
   * @default ""
   */
  translateY?: string;
  /**
   * 在Z轴偏移tx，单位px，nvue不支持
   * @default ""
   */
  translateZ?: string;
  /**
   * 在X轴偏移tx，在Y轴偏移ty，在Z轴偏移tz，单位px，nvue不支持
   * @default ""
   */
  translate3d?: string[];
}

interface TransitionInstance {
  /**
   * 手动初始化配置
   */
  init: (config: Config) => any;
  /**
   * 动画队列
   */
  step: (type: Type, config?: Config) => any;
  /**
   * 执行动画
   */
  run: (callback?: () => any) => any;
}

export type {
  TransitionProps as UvTransitionProps,
  TransitionEvents as UvTransitionEvents,
  _Transition as UvTransition,
  TransitionInstance as UvTransitionInstance,
};

declare global {
  namespace UniHelper {
    export type UvTransitionProps = TransitionProps;
    export type UvTransitionEvents = TransitionEvents;
    export type UvTransition = _Transition;
    export type UvTransitionInstance = TransitionInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvTransition: _Transition;
  }
}
