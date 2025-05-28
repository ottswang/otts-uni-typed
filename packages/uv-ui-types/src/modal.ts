import type { BaseComponent } from "./_common";

type ModalAlign = "left" | "center" | "right";

interface ModalProps {
  /**
   * 标题内容
   * @default ""
   */
  title?: string;
  /**
   * 模态框内容，如传入slot内容，则此参数无效
   * @default ""
   */
  content?: string;
  /**
   * 确认按钮的文字
   * @default "确认"
   */
  confirmText?: string;
  /**
   * 取消按钮的文字
   * @default "取消"
   */
  cancelText?: string;
  /**
   * 是否显示确认按钮
   * @default true
   */
  showConfirmButton?: boolean;
  /**
   * 是否显示取消按钮
   * @default false
   */
  showCancelButton?: boolean;
  /**
   * 确认按钮的颜色
   * @default "#2979ff"
   */
  confirmColor?: string;
  /**
   * 取消按钮的颜色
   * @default "#606266"
   */
  cancelColor?: string;
  /**
   * 对调确认和取消的位置
   * @default false
   */
  buttonReverse?: boolean;
  /**
   * 是否开启缩放模式
   * @default true
   */
  zoom?: boolean;
  /**
   * 是否异步关闭，只对确定按钮有效
   * @default false
   */
  asyncClose?: boolean;
  /**
   * 是否允许点击遮罩关闭该组件
   * @default true
   */
  closeOnClickOverlay?: boolean;
  /**
   * 往上偏移的值，给一个负的margin-top，往上偏移，避免和键盘重合的情况，单位任意，数值则默认为rpx单位
   * @default 0
   */
  negativeTop?: string | number;
  /**
   * modal宽度，不支持百分比，可以数值，单位px(rpx)
   * @default "650rpx"
   */
  width?: string | number;
  /**
   * 文本对齐方式
   * @version `1.0.7`
   * @default "left"
   */
  align?: ModalAlign;
  /**
   * 文本扩展样式
   * @version `1.0.7`
   * @default ""
   */
  textStyle?: Record<string, any>;
}

interface ModalEvents {
  /**
   * 点击确认按钮时触发
   */
  ["onConfirm"]?: () => any;
  /**
   * 点击取消按钮时触发
   */
  ["onCancel"]?: () => any;
  /**
   * 关闭模态框组件时触发
   */
  ["onClose"]?: () => any;
}

interface ModalSlots {
  /**
   * 传入自定义内容，一般为富文本
   */
  ["default"]?: () => any;
  /**
   * 传入自定义按钮，用于在微信小程序弹窗通过按钮授权的场景
   */
  ["confirmButton"]?: () => any;
}

interface _Modal extends BaseComponent<ModalProps & ModalEvents, ModalSlots> {}

interface ModalInstance {
  /**
   * 弹出模态框组件
   */
  open: () => any;
  /**
   * 关闭模态框组件
   */
  close: () => any;
  /**
   * :asyncClose="true"异步关闭场景，验证通过则关闭，验证不通过不关闭且按钮恢复加载前的状态等场景，可以调用此方法关闭加载状态
   */
  closeLoading: () => any;
}

export type {
  ModalProps as UvModalProps,
  ModalEvents as UvModalEvents,
  _Modal as UvModal,
  ModalInstance as UvModalInstance,
};

declare global {
  namespace UniHelper {
    export type UvModalProps = ModalProps;
    export type UvModalEvents = ModalEvents;
    export type UvModal = _Modal;
    export type UvModalInstance = ModalInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvModal: _Modal;
  }
}
