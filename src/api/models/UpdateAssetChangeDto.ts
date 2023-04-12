import type { AssetChangeType } from "./AssetChangeType";
import type { AssetInfo } from "./AssetInfo";

export type UpdateAssetChangeDto = {
    /**
    * @type integer | undefined int64
    */
    id?: number | undefined;
    changeType?: AssetChangeType | undefined;
    /**
    * @description 调拨：调入科室id
    * @type integer | undefined int64
    */
    organizationUnitId?: number | undefined;
    /**
    * @description 情况说明
    * @type string | undefined
    */
    description?: string | undefined;
    /**
    * @description 资产变更项
    * @type array | undefined
    */
    assets?: AssetInfo[] | undefined;
};
