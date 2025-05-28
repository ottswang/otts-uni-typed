import type { BaseComponent, Direction } from "./_common";

interface StepsProps {
  /**
   * 方向
   * @default "row"
   */
  direction?: Direction;
  /**
   * 设置当前处于第几步
   * @default 0
   */
  current?: string | number;
  /**
   * 激活状态颜色
   * @default "#3c9cff"
   */
  activeColor?: string;
  /**
   * 未激活状态颜色
   * @default "#969799"
   */
  inactiveColor?: string;
  /**
   * 未激活状态图标
   * @default ""
   */
  inactiveIcon?: string;
  /**
   * 是否显示点类型
   * @default false
   */
  dot?: boolean;
  /**
   * 自定义外部样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface _Steps extends BaseComponent<StepsProps> {}

export type { StepsProps as UvStepsProps, _Steps as UvSteps };

declare global {
  namespace UniHelper {
    export type UvStepsProps = StepsProps;
    export type UvSteps = _Steps;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvSteps: _Steps;
  }
}
