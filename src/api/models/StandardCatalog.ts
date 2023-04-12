import type { User } from "./User";

export type StandardCatalog = {
    /**
    * @description 科目编码
    * @type string | undefined
    */
    codeName?: string | undefined;
    /**
    * @description 是否启用
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    /**
    * @description 排序序号
    * @type integer | undefined int32
    */
    orderNumber?: number | undefined;
    /**
    * @description 名称
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @description 描述
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @description [自动维护] 包含上级的完整名称
    * @type string | undefined
    */
    fullName?: string | undefined;
    /**
    * @description [自动维护] 编码路径
    * @type string | undefined
    */
    code?: string | undefined;
    /**
    * @description [自动维护] 级别
    * @type integer | undefined int32
    */
    level?: number | undefined;
    /**
    * @description 父级Id
    * @type integer | undefined int64
    */
    parentId?: number | undefined;
    parent?: StandardCatalog | undefined;
    /**
    * @description 子节点
    * @type array | undefined
    */
    children?: StandardCatalog[] | undefined;
    /**
    * @description 是否为叶节点
    * @type boolean | undefined
    */
    isLeaf?: boolean | undefined;
    /**
    * @type integer | undefined int32
    */
    tenantId?: number | undefined;
    /**
    * @type boolean | undefined
    */
    isDeleted?: boolean | undefined;
    deleterUser?: User | undefined;
    /**
    * @type integer | undefined int64
    */
    deleterUserId?: number | undefined;
    /**
    * @type string | undefined date-time
    */
    deletionTime?: string | undefined;
    creatorUser?: User | undefined;
    lastModifierUser?: User | undefined;
    /**
    * @type string | undefined date-time
    */
    lastModificationTime?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    lastModifierUserId?: number | undefined;
    /**
    * @type string | undefined date-time
    */
    creationTime?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    creatorUserId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
