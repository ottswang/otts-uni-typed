import type { BaseComponent } from "./_common";

interface StepsItemProps {
  /**
   * 标题文字
   * @default ""
   */
  title?: string;
  /**
   * 描述文本
   * @default ""
   */
  desc?: string;
  /**
   * 图标大小，需要uv-steps设置activeIcon或inactiveIcon。单位px(rpx)
   * @default 17
   */
  iconSize?: string | number;
  /**
   * 当前步骤是否处于失败状态
   * @default false
   */
  error?: boolean;
  /**
   * 自定义外部样式，可以利用该属性设置padding调整间距等场景
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface StepsItemSlots {
  /**
   * 自定义图标
   */
  ["icon"]?: () => any;
  /**
   * 自定义标题文字
   */
  ["title"]?: () => any;
  /**
   * 自定义描述文字
   */
  ["desc"]?: () => any;
}

interface _StepsItem extends BaseComponent<StepsItemProps, StepsItemSlots> {}

export type { StepsItemProps as UvStepsItemProps, _StepsItem as UvStepsItem };

declare global {
  namespace UniHelper {
    export type UvStepsItemProps = StepsItemProps;
    export type UvStepsItem = _StepsItem;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvStepsItem: _StepsItem;
  }
}
