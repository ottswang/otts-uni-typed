import type { BaseComponent } from "./_common";

type FormErrorType = "message" | "toast" | "border-bottom" | "none";
type FormLabelPosition = "left" | "top";
type FormLabelAlign = "left" | "center" | "right";
type RuleTrigger = "change" | "blur";
interface RuleItem {
  trigger?: RuleTrigger | RuleTrigger[];
  type?:
    | "string"
    | "number"
    | "boolean"
    | "method"
    | "regexp"
    | "integer"
    | "float"
    | "array"
    | "object"
    | "enum"
    | "date"
    | "url"
    | "hex"
    | "email"
    | "any";
  required?: boolean;
  pattern?: RegExp;
  min?: number;
  max?: number;
  len?: number;
  enum?: (string | number)[];
  whitespace?: boolean;
  transform?: (value: any) => any;
  message?: string;
  validator?: (rule: any, value: any, callback: () => any) => boolean;
  asyncValidator?: (
    rule: any,
    value: any,
    callback: (error?: Error) => void,
  ) => void;
}

type FormRules = Record<string, RuleItem | RuleItem[]>;

interface FormProps {
  /**
   * 表单数据对象
   */
  model?: Record<string, any>;
  /**
   * 通过ref设置，如果rules中有自定义方法等，需要使用setRules方法设置规则
   */
  rules?: FormRules;
  /**
   * 错误的提示方式
   * @default "message"
   */
  errorType?: FormErrorType;
  /**
   * 是否显示表单域的下划线边框
   * @default true
   */
  borderBottom?: boolean;
  /**
   * 表单域提示文字的位置
   * @default "left"
   */
  labelPosition?: FormLabelPosition;
  /**
   * 提示文字的宽度，单位px。注意：在 uv-form 设置此值可能会变化抖动，可以将此值设置到 uv-form-item 节点上，效果会有所改善。
   * @default 45
   */
  labelWidth?: string | number;
  /**
   * label字体的对齐方式
   * @default "left"
   */
  labelAlign?: FormLabelAlign;
  /**
   * label的样式，对象形式
   * @default ""
   */
  labelStyle?: Record<string, any>;
}

interface _Form extends BaseComponent<FormProps> {}

interface FormInstance {
  /**
   * 对整个表单进行校验的方法
   */
  validate: () => Promise<any>;
  /**
   * 如果rules中有自定义方法等，需要用此方法设置rules规则
   */
  setRules: (rules: Record<string, RuleItem | RuleItem[]>) => any;
  /**
   * 对部分表单字段进行校验，回调返回错误，需要自定义后续逻辑
   */
  validateField: () => any;
  /**
   * 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
   */
  resetFields: () => any;
  /**
   * 清空校验结果
   */
  clearValidate: () => any;
}

export type {
  RuleItem as UvFormItemRule,
  FormRules as UvFormRules,
  FormProps as UvFormProps,
  _Form as UvForm,
  FormInstance as UvFormInstance,
};

declare global {
  namespace UniHelper {
    export type UvFormItemRule = RuleItem;
    export type UvFormRules = FormRules;
    export type UvFormProps = FormProps;
    export type UvForm = _Form;
    export type UvFormInstance = FormInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvForm: _Form;
  }
}
