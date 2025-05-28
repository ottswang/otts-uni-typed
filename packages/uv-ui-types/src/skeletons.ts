import type { BaseComponent } from "./_common";

type SkeletonOption =
  | {
      /**
       * 骨架类型
       */
      type?: "line" | "avatar" | "flex" | "custom";
      /**
       * 重复数量
       */
      num?: number;
      /**
       * 骨架下边距
       */
      gap?: string;
      /**
       * 骨架样式
       */
      style?: string | Record<string, any>;
    }
  | number;

interface SkeletonsProps {
  /**
   * 是否显示骨架
   * @default true
   */
  loading?: boolean;
  /**
   * 是否开启动画效果
   * @default true
   */
  animate?: boolean;
  /**
   * 骨架内容
   * @default []
   */
  skeleton?: Array<SkeletonOption>;
}

interface _Skeletons extends BaseComponent<SkeletonsProps> {}

export type { SkeletonsProps as UvSkeletonsProps, _Skeletons as UvSkeletons };

declare global {
  namespace UniHelper {
    export type UvSkeletonsProps = SkeletonsProps;
    export type UvSkeletons = _Skeletons;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvSkeletons: _Skeletons;
  }
}
