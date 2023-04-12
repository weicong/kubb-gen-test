import type { PayBill } from "./PayBill";
import type { OrganizationUnit } from "./OrganizationUnit";
import type { User } from "./User";

export type PayUserDetail = {
    /**
    * @description 对应支出表Id
    * @type integer | undefined int64
    */
    payBillId?: number | undefined;
    payBill?: PayBill | undefined;
    /**
    * @description 参与人员科室Id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    organizationUnit?: OrganizationUnit | undefined;
    /**
    * @description 参与人员Id
    * @type integer | undefined int64
    */
    userId?: number | undefined;
    user?: User | undefined;
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
