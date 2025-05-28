import type { BaseComponent } from "./_common";

interface DropDownProps {
  /**
   * 组件唯一标识，需要手动传
   * @default "UVDROPDOWN"
   */
  sign?: string | number;
  /**
   * 默认值，表示参数value属于这里面的值，就说明是未选中即是默认展示的值。eg：上面示例中的{label: '全部',value: 'all'} 即是默认值。后续处理逻辑也可以根据是否是其中值进行过滤。
   * @default [0,'0','all']
   */
  defaultValue?: (string | number)[];
  /**
   * 是否吸顶
   * @default true
   */
  isSticky?: boolean;
  /**
   * 每项字体大小
   * @default "30rpx"
   */
  textSize?: string;
  /**
   * 每项文本颜色
   * @default "#333"
   */
  textColor?: string;
  /**
   * 每项选中状态字体大小
   * @default "30rpx"
   */
  textActiveSize?: string;
  /**
   * 每项右侧图标
   * @default "{name: 'arrow-down', size: '30rpx', color: '#333'}"
   */
  extraIcon?: Record<string, any>;
  /**
   * 每项选中后右侧图标
   * @default "{name: 'arrow-up', size: '30rpx', color: '#3c9cff'}"
   */
  extraActiveIcon?: Record<string, any>;
}

interface DropdownEvents {
  /**
   * 点击每项菜单回调，返回参数 `{ name, active, type } = e，active - 是否打开该项`
   */
  ["onSelectMenu"]?: (...args: any[]) => any;
}

interface _Dropdown extends BaseComponent<DropDownProps & DropdownEvents> {}

interface _DropdownInstance {
  /**
   * 初始化弹窗的位置，在滚动时可以调用此方法，及时更新位置
   */
  init: () => any;
}

export type {
  DropDownProps as UvDropDownProps,
  DropdownEvents as UvDropdownEvents,
  _Dropdown as UvDropdown,
  _DropdownInstance as UvDropdownInstance,
};

declare global {
  namespace UniHelper {
    export type UvDropDownProps = DropDownProps;
    export type UvDropdownEvents = DropdownEvents;
    export type UvDropdown = _Dropdown;
    export type UvDropdownInstance = _DropdownInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvDropdown: _Dropdown;
  }
}
