export type GetTicketStatsOutput = {
    /**
    * @type integer | undefined int32
    */
    totalCount?: number | undefined;
    /**
    * @description 未分配数量
    * @type integer | undefined int32
    */
    normalCount?: number | undefined;
    /**
    * @description 已领用数量
    * @type integer | undefined int32
    */
    usedCount?: number | undefined;
    /**
    * @description 已交还数量
    * @type integer | undefined int32
    */
    returnedCount?: number | undefined;
    /**
    * @description 已作废数量
    * @type integer | undefined int32
    */
    invalidatedCount?: number | undefined;
};
