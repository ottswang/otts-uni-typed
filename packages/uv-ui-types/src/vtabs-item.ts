import type { BaseComponent } from "./_common";

interface VtabsItemProps {
  /**
   * 内容区索引值，`chain=true`开启时必传
   * @default 0
   */
  index?: string | number;
}

interface _VtabsItem extends BaseComponent<VtabsItemProps> {}

export type { VtabsItemProps as UvVtabsItemProps, _VtabsItem as UvVtabsItem };

declare global {
  namespace UniHelper {
    export type UvVtabsItemProps = VtabsItemProps;
    export type UvVtabsItem = _VtabsItem;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UvVtabsItem: _VtabsItem;
  }
}
