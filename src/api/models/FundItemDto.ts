import type { FundItemType } from "./FundItemType";

export type FundItemDto = {
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
    /**
    * @description 名称
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @description 包含上级的完整名称
    * @type string | undefined
    */
    fullName?: string | undefined;
    /**
    * @description 代码
    * @type string | undefined
    */
    code?: string | undefined;
    /**
    * @description 级别
    * @type integer | undefined int32
    */
    level?: number | undefined;
    /**
    * @description 父级Id
    * @type integer | undefined int64
    */
    parentId?: number | undefined;
    /**
    * @type array | undefined
    */
    children?: FundItemDto[] | undefined;
    /**
    * @description 排序序号
    * @type integer | undefined int32
    */
    orderNumber?: number | undefined;
    /**
    * @description 归口管理科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 归口管理科室
    * @type string | undefined
    */
    organizationUnitDisplayName?: string | undefined;
    "type"?: FundItemType | undefined;
    /**
    * @description 描述
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @description 是否为叶节点
    * @type boolean | undefined
    */
    isLeaf?: boolean | undefined;
};
