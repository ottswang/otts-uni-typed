import type { BaseComponent } from "./_common";

type IndexListItemProps = Record<string, any>;

interface IndexListItemSlots {
  /**
   * 自定义列表内容
   */
  ["default"]?: () => any;
}

interface _IndexListItem
  extends BaseComponent<IndexListItemProps, IndexListItemSlots> {}

export type {
  IndexListItemProps as UvIndexListItemProps,
  _IndexListItem as UvIndexListItem,
};

declare global {
  namespace UniHelper {
    export type UvIndexListItemProps = IndexListItemProps;
    export type UvIndexListItem = _IndexListItem;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvIndexListItem: _IndexListItem;
  }
}
