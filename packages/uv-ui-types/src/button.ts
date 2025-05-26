import type { BaseComponent, ColorType, Lang } from "./_common";
import "vue";

type ButtonSize = "normal" | "large" | "mini";
type ButtonShape = "square" | "circle";
type ButtonFormType = "submit" | "rest";
type ButtonOpenType =
  | "feedback"
  | "share"
  | "getUserInfo"
  | "contact"
  | "getPhoneNumber"
  | "launchApp"
  | "openSetting"
  | "chooseAvatar"
  | "uploadDouyinVideo"
  | "im"
  | "getAuthorize"
  | "lifestyle"
  | "contactShare"
  | "openGroupProfile"
  | "openGuildProfile"
  | "openPublicProfile"
  | "shareMessageToFriend"
  | "addFriend"
  | "addColorSign"
  | "addGroupApp"
  | "addToFavorites"
  | "chooseAddress"
  | "chooseInvoiceTitle"
  | "login"
  | "subscribe"
  | "favorite"
  | "watchLater"
  | "openProfile"
  | "agreePrivacyAuthorization";

interface ButtonProps {
  /**
   * 是否显示按钮的细边框
   * @default true
   */
  hairline?: boolean;
  /**
   * 按钮的样式类型
   * @default "info"
   */
  type?: ColorType;
  /**
   * 按钮的大小
   * @default "normal"
   */
  size?: ButtonSize;
  /**
   * 按钮外观形状
   * @default "square"
   */
  shape?: ButtonShape;
  /**
   * 按钮是否镂空，背景色透明
   * @default false
   */
  plain?: boolean;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 按钮名称前是否带 loading 图标
   * @default false
   */
  loading?: boolean;
  /**
   * 加载中提示文字
   * @default ""
   */
  loadingText?: string;
  /**
   * 加载状态图标类型
   * @default "spinner"
   */
  loadingMode?: string;
  /**
   * 加载图标大小
   * @default 15
   */
  loadingSize?: string | number;
  /**
   * 开放能力
   * @default ""
   */
  openType?: ButtonOpenType;
  /**
   * 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
   * @default ""
   */
  formType?: ButtonFormType;
  /**
   * 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效 （注：只微信小程序、QQ小程序有效）
   * @default ""
   */
  appParameter?: string;
  /**
   * 指定是否阻止本节点的祖先节点出现点击态，微信小程序有效（默认 true）
   * @default true
   */
  hoverStopPropagation?: boolean;
  /**
   * 指定返回用户信息的语言
   * @default "en"
   */
  lang?: Lang;
  /**
   * 会话来源，openType="contact"时有效
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
   * 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取
   * @default ""
   */
  dataName?: string;
  /**
   * 节流，一定时间内只能触发一次，单位毫秒
   * @default 0
   */
  throttleTime?: string | number;
  /**
   * 按住后多久出现点击态，单位毫秒
   * @default 0
   */
  hoverStartTime?: string | number;
  /**
   * 手指松开后点击态保留时间，单位毫秒
   * @default 200
   */
  hoverStayTime?: string | number;
  /**
   * 按钮文字，之所以通过props传入，是因为slot传入的话（注：nvue中无法控制文字的样式）
   * @default ""
   */
  text?: string | number;
  /**
   * 按钮图标
   * @default ""
   */
  icon?: string;
  /**
   * 按钮图大小
   * @version `1.0.9`
   * @default ""
   */
  iconSize?: string | number;
  /**
   * 按钮颜色
   * @default ""
   */
  iconColor?: string;
  /**
   * 按钮颜色，支持传入linear-gradient渐变色
   * @default ""
   */
  color?: string;
  /**
   * 自定义按钮文字的样式，避免设置customStyle设置覆盖不了样式的情况
   * @default ""
   */
  customTextStyle?: Record<string, any>;
  /**
   * 定义需要用到的外部样式
   * @default ""
   */
  customStyle?: string | Record<string, any>;
}

interface ButtonEvents {
  /**
   * 按钮点击，请勿使用@tap点击事件，微信小程序无效，返回值为点击事件及参数
   * @description 阻止事件冒泡：vue2 使用 `@click.native.stop`, vue3 使用 view 包裹按钮，在 view 写 `@click.stop`
   */
  ["onClick"]?: (...args: any[]) => any;
  /**
   * 获取用户手机号回调，open-type="getPhoneNumber"生效
   */
  ["onGetphonenumber"]?: (...args: any[]) => any;
  /**
   * 用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo，open-type="getUserInfo"生效
   */
  ["onGetuserinfo"]?: (...args: any[]) => any;
  /**
   * 当使用开放能力时，发生错误的回调 ，open-type="launchApp"生效
   */
  ["onError"]?: (...args: any[]) => any;
  /**
   * 从小程序打开 App 成功的回调，open-type="launchApp"生效
   */
  ["onOpensetting"]?: (...args: any[]) => any;
  /**
   * 打开 APP 成功的回调，open-type="launchApp"生效
   */
  ["onLaunchapp"]?: (...args: any[]) => any;
  /**
   * 客服消息回调，open-type="contact"生效
   */
  ["onContact"]?: (...args: any[]) => any;
  /**
   * 获取用户头像回调，open-type="chooseAvatar"生效
   */
  ["onChooseavatar"]?: (...args: any[]) => any;
  /**
   * 添加群应用的回调，open-type="addGroupApp"生效
   */
  ["onAddgroupapp"]?: (...args: any[]) => any;
  /**
   * 调起用户编辑并选择收货地址的回调，open-type="chooseAddress"生效
   */
  ["onChooseaddress"]?: (...args: any[]) => any;
  /**
   * 用户选择发票抬头的回调，open-type="chooseInvoiceTitle"生效
   */
  ["onChooseinvoicetitle"]?: (...args: any[]) => any;
  /**
   * 订阅消息授权回调，open-type="subscribe"生效
   */
  ["onSubscribe"]?: (...args: any[]) => any;
  /**
   * 登录回调，open-type="login"生效
   */
  ["onLogin"]?: (...args: any[]) => any;
  /**
   * 监听跳转IM的成功回调，open-type="im"生效
   */
  ["onIm"]?: (...args: any[]) => any;
}

interface ButtonSlots {
  /**
   * 默认插槽，按钮文本，建议统一使用text参数，保证样式的统一性
   */
  ["default"]?: () => any;
  /**
   * 后置插槽，方便在按钮文字后面增加图标等
   */
  ["suffix"]?: () => any;
}

interface _Button
  extends BaseComponent<ButtonProps & ButtonEvents, ButtonSlots> {}

export type {
  ButtonOpenType as UvButtonOpenType,
  ButtonProps as UvButtonProps,
  ButtonEvents as UvButtonEvents,
  _Button as UvButton,
};

declare global {
  namespace UniHelper {
    export type UvButtonOpenType = ButtonOpenType;
    export type UvButtonProps = ButtonProps;
    export type UvButtonEvents = ButtonEvents;
    export type UvButton = _Button;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvButton: _Button;
  }
}
