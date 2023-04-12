import type { PagedResultDtoOfAssetFixedReportDetailDto } from "../PagedResultDtoOfAssetFixedReportDetailDto";

export type GetAllQueryParams = {
    /**
    * @description 固定资产上报总表id
    * @type integer | undefined int64
    */
    assetFixedReportId?: number | undefined;
};

/**
* @description Success
*/
export type GetAllResponse = PagedResultDtoOfAssetFixedReportDetailDto;
