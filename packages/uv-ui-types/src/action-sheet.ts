import type { BaseComponent, Lang } from "./_common";
import type { UvButtonOpenType } from "./button";

interface Action {
  /**
   * 小程序的打开方式
   * @default ""
   */
  openType?: UvButtonOpenType;
  /**
   * 该菜单是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 该菜单是否处于加载状态
   * @default false
   */
  loading?: boolean;
  /**
   * 该菜单的标题
   * @default ""
   */
  name?: string;
  /**
   * 该菜单的描述
   * @default ""
   */
  subname?: string;
  /**
   * 该菜单name文字的大小，单位px(rpx)
   * @default "16px"
   */
  fontSize?: string;
  /**
   * 该菜单name文字的颜色
   * @default "#303133"
   */
  color?: string;
}

interface ActionSheetProps {
  /**
   * 设置标题
   * @default ""
   */
  title?: string;
  /**
   * 选项上方的描述信息
   * @default ""
   */
  description?: string;
  /**
   * 按钮的文字数组
   * @default []
   */
  actions?: Action[];
  /**
   * 取消按钮的文字，不为空时显示按钮
   * @default ""
   */
  cancelText?: string;
  /**
   * 是否开启底部安全区适配
   * @default false
   */
  safeAreaInsetBottom?: boolean;
  /**
   * 点击遮罩是否允许关闭组件
   * @default true
   */
  closeOnClickOverlay?: boolean;
  /**
   * 点击某个菜单项时是否关闭组件
   * @default true
   */
  closeOnClickAction?: boolean;
  /**
   * 圆角值，默认无圆角
   * @default 0
   */
  round?: string | number;
  /**
   * 指定返回用户信息的语言
   * @default "en"
   */
  lang?: Lang;
  /**
   * 会话来源，open-type="contact"时有效。只微信小程序有效
   * @default ""
   */
  sessionFrom?: string;
  /**
   * 会话内消息卡片标题，openType="contact"时有效
   * @default ""
   */
  sendMessageTitle?: string;
  /**
   * 会话内消息卡片点击跳转小程序路径，openType="contact"时有效
   * @default ""
   */
  sendMessagePath?: string;
  /**
   * 会话内消息卡片图片，openType="contact"时有效
   * @default ""
   */
  sendMessageImg?: string;
  /**
   * 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，openType="contact"时有效
   * @default false
   */
  showMessageCard?: boolean;
  /**
   * 打开 APP 时，向 APP 传递的参数，openType=launchApp 时有效
   * @default ""
   */
  appParameter?: string;
}

interface ActionSheetEvents {
  /**
   * 点击ActionSheet列表项时触发
   */
  ["onSelect"]?: (e: any) => any;
  /**
   * 点击取消按钮时触发。点击遮罩触发该事件需要设置:closeOnClickOverlay="true"
   */
  ["onClose"]?: () => any;
  /**
   * 用户点击该按钮时，会返回获取到的用户信息，回调的 detail 数据与 wx.getUserInfo 返回的一致，openType="getUserInfo"时有效
   */
  ["onGetuserinfo"]?: (...args: any[]) => any;
  /**
   * 获取用户手机号回调，openType="getPhoneNumber"时有效
   */
  ["onGetphonenumber"]?: (...args: any[]) => any;
  /**
   * 当使用开放能力时，发生错误的回调，openType="error"时有效
   */
  ["onError"]?: (...args: any[]) => any;
  /**
   * 打开 APP 成功的回调，openType="launchApp"时有效
   */
  ["onLaunchapp"]?: (...args: any[]) => any;
  /**
   * 在打开授权设置页后回调，openType="openSetting"时有效
   */
  ["onOpensetting"]?: (...args: any[]) => any;
}

interface _ActionSheet
  extends BaseComponent<ActionSheetProps & ActionSheetEvents> {}

interface ActionSheetInstance {
  /**
   * 弹出操作菜单组件
   */
  open: () => any;
  /**
   * 关闭操作菜单组件
   */
  close: () => any;
}

export type {
  Action as UvActionSheetActionItem,
  ActionSheetProps as UvActionSheetProps,
  ActionSheetEvents as UvActionSheetEvents,
  _ActionSheet as UvActionSheet,
  ActionSheetInstance as UvActionSheetInstance,
};

declare global {
  namespace UniHelper {
    export type UvActionSheetActionItem = Action;
    export type UvActionSheetProps = ActionSheetProps;
    export type UvActionSheetEvents = ActionSheetEvents;
    export type UvActionSheet = _ActionSheet;
    export type UvActionSheetInstance = ActionSheetInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvActionSheet: _ActionSheet;
  }
}
