import type { EntityChangeType } from "./EntityChangeType";

export type EntityChangeListDto = {
    /**
    * @type integer | undefined int64
    */
    userId?: number | undefined;
    /**
    * @type string | undefined
    */
    userName?: string | undefined;
    /**
    * @type string | undefined date-time
    */
    changeTime?: string | undefined;
    /**
    * @type string | undefined
    */
    entityTypeFullName?: string | undefined;
    /**
    * @type string | undefined
    */
    entityId?: string | undefined;
    changeType?: EntityChangeType | undefined;
    /**
    * @type string | undefined
    */
    changeTypeName?: string | undefined;
    /**
    * @type integer | undefined int64
    */
    entityChangeSetId?: number | undefined;
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
};
