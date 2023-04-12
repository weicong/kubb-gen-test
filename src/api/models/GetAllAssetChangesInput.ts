import type { AssetChangeType } from "./AssetChangeType";
import type { ApprovalState } from "./ApprovalState";

export type GetAllAssetChangesInput = {
    changeType?: AssetChangeType | undefined;
    /**
    * @description 定稿状态
    * @type boolean | undefined
    */
    isActive?: boolean | undefined;
    approvalState?: ApprovalState | undefined;
    /**
    * @description 归口管理
    * @type boolean | undefined
    */
    isManage?: boolean | undefined;
    /**
    * @type string | undefined
    */
    filter?: string | undefined;
    /**
    * @type string | undefined
    */
    sorting?: string | undefined;
    /**
    * @type integer | undefined int32
    */
    skipCount?: number | undefined;
    /**
    * @type integer | undefined int32
    */
    maxResultCount?: number | undefined;
};
