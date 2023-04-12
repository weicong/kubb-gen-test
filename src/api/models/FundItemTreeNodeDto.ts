export type FundItemTreeNodeDto = {
    /**
    * @description 父级Id
    * @type integer | undefined int64
    */
    parentId?: number | undefined;
    /**
    * @description 名称
    * @type string | undefined
    */
    name?: string | undefined;
    /**
    * @description 是否为叶节点
    * @type boolean | undefined
    */
    isLeaf?: boolean | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
