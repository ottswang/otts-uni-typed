import type { BaseComponent } from "./_common";

interface DropDownPopupProps {
  /**
   * 组件唯一标识，需要手动传，与DropDown组件必须保持一致
   * @default "UVDROPDOWN"
   */
  sign?: string | number;
  /**
   * 弹出层的层级
   * @default 999
   */
  zIndex?: string | number;
  /**
   * 遮罩层的透明度
   * @default 0.5
   */
  opacity?: string | number;
  /**
   * 是否允许点击遮罩层关闭弹窗
   * @default true
   */
  clickOverlayOnClose?: boolean;
  /**
   * 当前下拉筛选菜单对象
   * @default ""
   */
  currentDropItem?: Record<string, any>;
  /**
   * 指定从当前下拉筛选菜单对象元素中读取哪个属性作为文本展示
   * @default "label"
   */
  keyName?: string;
}

interface DropdownPopupEvents {
  /**
   * 点击筛选回调处理
   */
  ["onClickItem"]?: (...args: any[]) => any;
  /**
   * 打开关闭弹窗触发
   */
  ["onPopupChange"]?: (...args: any[]) => any;
}

interface DropdownPopupSlots {
  /**
   * 默认插槽，完全自定义内容，包括逻辑都需自己写
   */
  ["default"]?: () => any;
}

interface DropdownPopupInstance {
  /**
   * 打开弹窗
   */
  open: () => any;
  /**
   * 关闭弹窗
   * @returns
   */
  close: () => any;
}

interface _DropdownPopup
  extends BaseComponent<
    DropDownPopupProps & DropdownPopupEvents,
    DropdownPopupSlots
  > {}

export type {
  DropDownPopupProps as UvDropDownPopupProps,
  DropdownPopupEvents as UvDropDownPopupEvents,
  _DropdownPopup as UvDropDownPopup,
  DropdownPopupInstance as UvDropDownPopupInstance,
};

declare global {
  namespace UniHelper {
    export type UvDropDownPopupProps = DropDownPopupProps;
    export type UvDropDownPopupEvents = DropdownPopupEvents;
    export type UvDropDownPopup = _DropdownPopup;
    export type UvDropDownPopupInstance = DropdownPopupInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvDropDownPopup: _DropdownPopup;
  }
}
