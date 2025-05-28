import type { BaseComponent, LabelPosition } from "./_common";

interface FormItemProps {
  /**
   * 左侧提示文字
   * @default ""
   */
  label?: string;
  /**
   * 表单域model对象的属性名，在使用 validate、resetFields 方法的情况下，该属性是必填的
   * @default ""
   */
  prop?: string;
  /**
   * 是否显示下边框，如不需要下边框，需同时将uv-form的同名参数设置为false
   * @default true
   */
  borderBottom?: boolean;
  /**
   * 提示文字的宽度，单位rpx，如设置，将覆盖uv-form的同名参数
   * @default ""
   */
  labelWidth?: string | number;
  /**
   * label的位置
   * @default ""
   */
  labelPosition?: LabelPosition;
  /**
   * 右侧自定义字体图标(限uv-ui内置图标)或图片地址
   * @default ""
   */
  rightIcon?: string;
  /**
   * 左侧自定义字体图标(限uv-ui内置图标)或图片地址
   * @default ""
   */
  leftIcon?: string;
  /**
   * 左侧自定义字体图标的样式
   * @default ""
   */
  leftIconStyle?: string | Record<string, any>;
  /**
   * 是否显示左边的 * 号，这里仅起展示作用，如需校验必填，请通过rules配置必填规则。注意：如果页面没有左右边距，星号可能被遮挡，请根据情况设置样式
   * @default false
   */
  required?: boolean;
  /**
   * 自定义样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface FormItemEvents {
  /**
   * 点击时触发
   */
  ["onClick"]?: () => any;
}

interface FormItemSlots {
  /**
   * form-item 的内容
   */
  ["default"]?: () => any;
  /**
   * 右侧自定义内容，可以在此传入一个按钮，用于获取验证码等场景
   */
  ["right"]?: () => any;
}

interface _FormItem
  extends BaseComponent<FormItemProps & FormItemEvents, FormItemSlots> {}

export type {
  FormItemProps as UvFormItemProps,
  FormItemEvents as UvFormItemEvents,
  _FormItem as UvFormItem,
};

declare global {
  namespace UniHelper {
    export type UvFormItemProps = FormItemProps;
    export type UvFormItemEvents = FormItemEvents;
    export type UvFormItem = _FormItem;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvFormItem: _FormItem;
  }
}
